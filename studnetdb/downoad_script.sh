#!/bin/bash
# test connection ping -q -w 1 -c 1 `ip r | grep default | cut -d ' ' -f 3` > /dev/null && echo ok || echo error
 	  i="$1"
    j="$2"

	if [ $# -eq 0 ]
	then
	 	echo "žiaden argument -> \n Napíš cislo zaciatocneho id studenta:"
	    read i
	    echo "začínam od $i"

		echo "číslo koncového id:"
	    read j
	    echo "končím na $j"
	fi
   # PARSE udajov s vystupného súboru pre studenta
	function nacitaj_udaje_studenta {
		zdrojak="$1"
		usr_id=$(echo "$zdrojak" | grep "Identifikačné číslo:" | cut -d" " -f3)
    meno=$(echo "$zdrojak" | sed -n 32p | sed -E -e 's/Ing. //g'| sed -E -e 's/Bc. //g'| sed -E -e 's/Mgr. //g' | cut -d' ' -f1)

    usr_name=$(echo "$zdrojak" | sed -n 47p | cut -d' ' -f1)
    email=$(echo "$zdrojak" | grep "\[at\]" | tail -1 | sed -e 's/ \[at\] /@/g')

   	fakulta=$(echo "$zdrojak" | sed -n 76p | cut -d' ' -f1)
   	forma_studia=$(echo "$zdrojak" | sed -n 76p | cut -d' ' -f3)
   	semester=$(echo "$zdrojak" | sed -n 76p | cut -d " " -f5 | cut -c 1)
   	rocnik=$(echo "$zdrojak" | sed -n 76p | cut -d " " -f7 | cut -c 1)
    stupen=$(echo "$zdrojak" | sed -n 82p | cut -d " " -f1)
    if [ -z "$(echo $stupen | grep "Bakalársky")" ]
    then
      if [ -z "$(echo $stupen | grep "Inžiniersky")" ]
      then
        stupen_skratka="x"
      else
        stupen_skratka="ing"
      fi
    else
      stupen_skratka="bc"
    fi

		odbor_id=$(echo "$zdrojak" | sed -n 69p | cut -d'&' -f1)
		odbor_skratka=$(echo "$zdrojak" | sed -n 69p | rev | cut -d' ' -f 1 | rev)
		odbor_nazov=$(echo "$zdrojak" | sed -n 69p | awk -v FS="(&nbsp;&nbsp;|$odbor_skratka)" '{print $2}')

    if [ -z "$rocnik" ]
    then
      echo $usr_id - "Nieje študent."
    else
      echo $usr_id - "inserting."
      query2="INSERT INTO studenti (id, usr, meno, email, forma, semester, rocnik, stupen, odbor_id)VALUES ('$usr_id', '$usr_name', '$meno', '$email', '$forma_studia', '$semester', '$rocnik', '$stupen_skratka', '$odbor_id')"
      query1="INSERT INTO odbor (id, skratka, nazov) VALUES ('$odbor_id', '$odbor_skratka', '$odbor_nazov')"
      mysql --login-path=studnet -e "$query1" studnet
      mysql --login-path=studnet -e "$query2" studnet
    fi
	}

    for i in `seq $i $j`;
    #for i in `seq $i $j`;
    do
    	#wget - stiahnut html s udajmi
    	#1.sed - vybrat len riadky s relevantnymi udajmi o uzivatelovi
    	#2.sed - odstranit vsetky zbytocne html tagy
        zdrojak=$(wget -q --load-cookies cookies.txt -O - "https://is.stuba.sk/auth/lide/clovek.pl?id=$i;lang=sk" | \
        sed -n '432,433p' | sed -e 's/<[^>]*>/\n/g')
        if [ -z "$(echo "$zdrojak" | grep "Zadaná osoba nebola nájdená" )" ]
        then
        	nacitaj_udaje_studenta "$zdrojak"
        else
        	echo "osoba nenajdena"
        fi

        let i=i+1
    done
