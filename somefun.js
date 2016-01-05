flag=1
function f1(){
	alert("Yes. you are right ")
}
function f(){
	if(flag==1)
		{
			By.style.top=90
			By.style.left=500
			flag=2
		}
	else if(flag==2)
		{
			By.style.top=90
			By.style.left=50
			flag=3
		}
	else if(flag==3)
		{
			By.style.top=235
			By.style.left=360
			flag=1
		}
}