/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
*/
export function checkPasswordStrength(password) {
  let strength = "";
  let level = 0;
  let oneLowerCase = false;
  let oneUpperCase = false;
  let oneNumber = false;
  let oneSpecial = false;
  let geEight = false;
  
  if(typeof password != "string" || password === ""){
    return strength = "weak"
  }

  // check password
  if (password.length >= 8){
    geEight = true;
  }

  if(String(password).length <= 8){
    strength = "weak"
  }

  for(let i =0; i< password.length; i++){
    let char = password[i];

    if(char >= "a" && char <= "z"){
      oneLowerCase = true;
    }

    if(char >= "A" && char <= "Z"){
      oneUpperCase = true;
    }

    if(Number(char) >= 0 ){
      oneNumber = true
    }

    let specials = "!@#$%^&*()_+-=[]{}|;:,.<>?"
    for(let j = 0; j < specials.length; j++){  
      if(char == specials[j]){
        oneSpecial = true;
      }
    }
  }

  if(geEight){
    level++
  } 
  
  if(oneLowerCase){
    level++
  } 
  
  if(oneUpperCase){
    level++
  } 
  
  if(oneNumber){
    level++
  } 
  
  if(oneSpecial){
    level++
  }


  if(level >=2 && level <= 3){
    strength = "medium"
  }

  if(level == 4){
    strength = "strong"
  }

  if(level == 5){
    strength = "very strong"
  }

  return strength;
}

checkPasswordStrength("th1s!sMg")
