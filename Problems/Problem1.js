const validateEmai = (email) => {
  // if email is empty or length lower than 6 or greater than 256 then email is not valid
  if (
    email === "" ||
    email === undefined ||
    email === null ||
    email.length < 6 ||
    email.length > 256
  )
    return false;

  // clean edges of the email
  let mail = email.trim("");

  // index of first @
  const firstindex = mail.indexOf("@");

  // index of last @
  const lastIndex = mail.lastIndexOf("@");

  // if firstindex of @ is -1 means that there's no @
  // if firstIndex doesn't equal lastIndex means that there's more than 1 @
  // if firstindex equal to 0 mean its at the beginning of the email
  // if firstindex equal to (mail.length - 1) mean its at the end of the email
  // All these return False
  if (
    firstindex === -1 ||
    firstindex !== lastIndex ||
    firstindex === 0 ||
    firstindex === mail.length - 1
  ) {
    return false;
  }

  // index of last dot
  const dotIndex = mail.lastIndexOf(".");

  // index of last dot is less than index of @ then there's no dot after @
  // mail[lastIndex +- 1] equal to . then @ has beside it an dot
  // Both these return False
  if (
    dotIndex < lastIndex ||
    mail[lastIndex + 1] === "." ||
    mail[lastIndex - 1] === "."
  )
    return false;

  return true;
};

// console.log(validateEmai("john.doe@gmail.com"));
// console.log(validateEmai("john.doe@.gmail.com.lb"));
console.log(validateEmai(""));
