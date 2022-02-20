import crypto from "crypto"

export const gravatarPath = (string) => {
  const lowercaseString = string.trim().toLowerCase()
  const md5 = crypto.createHash('md5')
  const digest = md5.update(lowercaseString,'binary').digest('hex');

  return (
    `http://www.gravatar.com/avatar/${digest}/?d=robohash`
  )
}
