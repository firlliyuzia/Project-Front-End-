function cek_fName() {
			var name = document.myForm.FirstName.value;
			pattern = /^[a-zA-Z\s]+$/g;
			if (name == "") {
				document.getElementById("blankFname").style.display = "inline";
				document.getElementById("fixFName").style.display = "block";

				//document.getElementById("errorFname").style.display="none";
				return false;
			} else {
				document.getElementById("blankFname").style.display = "none";
				if (pattern.test(name)) {
					//document.getElementById("errorFname").style.display="none";
					return true;
				}
				document.getElementById("errorFname").style.display = "inline";
				document.getElementById("fixFName").style.display = "block";
				return false;
			}
		}

		function cek_lName() {
			var name = document.myForm.LastName.value;
			pattern = /^[a-zA-Z\s]+$/g;
			if (name == "") {
				document.getElementById("blankLname").style.display = "inline";
				document.getElementById("fixLName").style.display = "block";
				//document.getElementById("errorLname").style.display="none";
				return false;
			} else {
				document.getElementById("blankLname").style.display = "none";
				if (pattern.test(name)) {
					//document.getElementById("errorLname").style.display="none";
					return true;
				}
				document.getElementById("errorLname").style.display = "inline";
				document.getElementById("fixLName").style.display = "block";
				return false;
			}
		}

		function cek_birth() {
			var month = document.myForm.month.value;
			day = document.myForm.day.value;
			year = document.myForm.year.value;
			if ((month == "0") || (day == "0") || (year == "0")) {
				document.getElementById("blankBirth").style.display = "inline";
				document.getElementById("fixBirth").style.display = "block";
				return false;
			} else {
				//document.getElementById("blankBirth").style.display="none";
				return true;
			}
		}

		function cek_gender() {
			if (document.myForm.gender.value == "") {
				document.getElementById("blankGender").style.display = "inline";
				document.getElementById("fixGender").style.display = "block";
				return false;
			}
			//document.getElementById("blankGender").style.display="none";
			return true;
		}

		function checkForm(e) {
			var cek = true;
			if (!(cek_fName())) {
				cek = cek && false;
			}
			if (!(cek_lName())) {
				cek = cek && false;
			}
			if (!(cek_birth())) {
				cek = cek && false;
			}
			if (!(cek_gender())) {
				cek = cek && false;
			}
			if (cek == true) {
				//alert("Name : " + document.myForm.FirstName.value + " " + document.myForm.LastName.value);
				document.getElementById("dFName").style.display="block";
				document.getElementById("dFName2").innerHTML=document.myForm.FirstName.value;
				document.getElementById("dLName").style.display="block";
				document.getElementById("dLName2").innerHTML=document.myForm.LastName.value;
				document.getElementById("dBirth").style.display="block";
				document.getElementById("dBirth2").innerHTML=document.myForm.day.value +" "+ document.myForm.month.value + " "+ document.myForm.year.value;
				document.getElementById("dGender").style.display="block";
				document.getElementById("dGender2").innerHTML=document.myForm.gender.value;
				document.getElementById("dAddress").style.display="block";
				document.getElementById("dAddress2").innerHTML=document.myForm.alamat.value;
				document.getElementById("dPhone").style.display="block";
				document.getElementById("dPhone2").innerHTML=document.myForm.phoneNumber.value;
				document.getElementById("dEmail").style.display="block";
				document.getElementById("dEmail2").innerHTML=document.myForm.email.value;
				
				//return true;
			} 
			else {
				document.getElementById("errorInput").style.display = "inline";
				document.getElementById("listError").style.display = "block";
				//return false;
			}
		}

		function formatPhoneNumber(value){
			if (!value) return value;
			const phoneNumber=value.replace(/[^\d]/g, "");
			const phoneNumberLength=phoneNumber.length;
			if (phoneNumberLength < 4) return phoneNumber;
			if (phoneNumberLength < 6) {
				return `(${phoneNumber.slice(0,3)}) ${phoneNumber.slice(3)}`;
			}
			return `(${phoneNumber.slice(0,3)}) ${phoneNumber.slice(
				3,
				6,
			)}-${phoneNumber.slice(6,9)}`
		}

		function phoneNumberFormatter() {
			const inputField=document.getElementById("phoneNumber");
			const formattedInputValue=formatPhoneNumber(inputField.value);
			inputField.value=formattedInputValue;
		}

		function emailvalid(){
			var form = document.getElementById("form");
			var email = document.getElementById("email").value;
			var text = document.getElementById("text");
			var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

			if (email.match(pattern)){
				form.classList.add("valid");
				form.classList.remove('invalid');
				text.innerHTML = "Your Email Address Invalid";
				text.style.color="#00ff00";
			}
			else
			{
				form.classList.remove("valid");
				form.classList.add("invalid");
				text.innerHTML = "Please Enter Valid Email Address";
				text.style.color="#ff0000";
			}
			
			if (email =="")
			{
				form.classList.remove("valid");
				form.classList.remove("invalid");
				text.innerHTML = " ";
				text.style.color="#00ff00"
			}
		}
		