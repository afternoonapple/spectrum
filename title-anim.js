var titleanim = 0
	var update = setInterval(update, 100)
	
		function update() {
			titleanim = titleanim+1
			
			if (titleanim % 100 == 0) { 
				document.getElementById("titleanim").innerHTML = "Spectrum";
			}
            
            if (titleanim % 100 == 13) { 
				document.getElementById("titleanim").style.transform = "skewY(-0.5deg)";
			}
            
			if (titleanim % 100 == 15) { 
				document.getElementById("titleanim").style.color = "yellow";
			}
            
            if (titleanim % 100 == 16) { 
				document.getElementById("titleanim").style.transform = "translate(5px, -2px)";
			}
            
            if (titleanim % 100 == 17) { 
				document.getElementById("titleanim").style.color = "magenta";
			}
            
            if (titleanim % 100 == 18) { 
				document.getElementById("titleanim").style.transform = "translate(10px, -3px)";
			}
            
            if (titleanim % 100 == 19) { 
				document.getElementById("titleanim").style.color = "cyan";
			}
            
            if (titleanim % 100 == 20) { 
				document.getElementById("titleanim").style.transform = "skewY(0.5deg)";
			}
            
            if (titleanim % 100 == 22) { 
				document.getElementById("titleanim").style.color = "white";
			}
            
            if (titleanim % 100 == 24) { 
                document.getElementById("titleanim").style.transform = "none";
			}
            
            if (titleanim % 100 == 80) { 
				document.getElementById("titleanim").innerHTML = "S̴p̴e̶c̸t̴r̸u̷m̴";
			}
            
            if (titleanim % 100 == 83) { 
				document.getElementById("titleanim").innerHTML = "S̸̞͇̏̈p̶̻̎ĕ̵̯c̴̡̩̍t̶̢̔̊r̴̬̲̎ű̶̫m̵͕̟̃";
			}
            
            if (titleanim % 100 == 84) {
				document.getElementById("titleanim").innerHTML = "S̸̲̣̯͐͂͘͠p̵̰̟̹̓̊̍̀̓̕͝ę̵͈͈͎̤̹͕͎̫͎̈́̽͂̏̍c̶̗̣͍͚̊̈́̓̍̕t̴̘̩̬͚̃͆̓́̊͝ṙ̷̨̢̰̭̠͈̻̄̏̿ͅu̸̡͍̮̬̲̳̞̗̽m̸̉";
			}
            
            if (titleanim % 100 == 85) { 
				document.getElementById("titleanim").innerHTML = "S̸̨̞͍̫͜͝p̶͔̻̉̆͐̕ḙ̸͎̺͚͊́̆͂c̴͚̫͖̻̼͇̃t̵̨͍̗͛̄r̴̺͕̽̆ų̵͈̃̊͊̕ͅm̸̮̃͋̒̀";
			}
            
            if (titleanim % 100 == 86) { 
				document.getElementById("titleanim").innerHTML = "Ŝ̷̨̻̱̉p̧̧͖e̵̜̾͝c̶̩̊t̶͉̀̏r̷͍̥̅ŭ̵͔̺͠m̵̪͍̼̓";
			}
            
            if (titleanim % 100 == 88) { 
				document.getElementById("titleanim").innerHTML = "S̶p̶e̵c̴t̵r̷u̴m̷";
			}
            
            if (titleanim % 100 == 91) { 
				document.getElementById("titleanim").innerHTML = "Spectrum";
			}
            
		}
		