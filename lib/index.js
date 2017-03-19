function limitedPermutation (str, int) {
  const strlen = (typeof str === 'string') ? str.length : ''
  const limit = (typeof int === 'number') ? int : 0

  if (strlen === '') {
    throw new Error('The first argument should be an effective character string.')
  }

  if (limit < 1) {
    throw new Error('The second argument should be a natural number.')
  }

  if (strlen < limit) {
    throw new Error('The integer of second argument is smaller than the length of first argument.')
  }

  const strspl = str.split('')
  let result = []

  if (limit === 1) {
    return strspl
  }

  for (let i = 0; i < strlen; ++i) {
    const res = limitedPermutation(str, limit - 1)
    const reslen = res.length

    for (let j = 0; j < reslen; ++j) {
      const t = [strspl[i]].concat(res[j])
      result.push(t)
    }
  }

  return result
}

module.exports = limitedPermutation
