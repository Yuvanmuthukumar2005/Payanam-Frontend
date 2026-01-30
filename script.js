 let generatedOTP = "";
  let otpExpiryTime = 0;

  function sendOTP() {
    const mobile = document.getElementById("mobile").value.trim();
    const otpSection = document.getElementById("otpSection");
    const otpMsg = document.getElementById("otpMsg");

    // Mobile number validation (India)
    if (!/^[6-9]\d{9}$/.test(mobile)) {
      alert("Enter a valid 10-digit mobile number");
      return;
    }

    // Generate 6-digit OTP
    generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();

    // Set OTP expiry (2 minutes)
    otpExpiryTime = Date.now() + (2 * 60 * 1000);

    // Show OTP input section
    otpSection.style.display = "block";
    otpMsg.textContent = "";

    // Demo purpose only
    alert("Your OTP is: " + generatedOTP);
    console.log("OTP:", generatedOTP);
  }

  function verifyOTP() {
    const enteredOTP = document.getElementById("otpInput").value.trim();
    const otpMsg = document.getElementById("otpMsg");

    if (!enteredOTP) {
      otpMsg.textContent = "Please enter OTP";
      return;
    }

    if (Date.now() > otpExpiryTime) {
      otpMsg.textContent = "OTP expired. Please resend OTP.";
      return;
    }

    if (enteredOTP === generatedOTP) {
      otpMsg.classList.remove("text-danger");
      otpMsg.classList.add("text-success");
      otpMsg.textContent = "OTP verified successfully ✅";
    } else {
      otpMsg.classList.remove("text-success");
      otpMsg.classList.add("text-danger");
      otpMsg.textContent = "Invalid OTP ❌";
    }
  }