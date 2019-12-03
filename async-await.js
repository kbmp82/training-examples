
//create promise
const getDataPromise = (data) => new Promise((resolve, reject) => {
  setTimeout(() => {
    typeof data === 'number' ? resolve(data * 2) : reject('not a number')
  }, 2000)

})

//async/await
const processData = async () => {
  return await getDataPromise(10)
}

processData()
  .then((res) => {
    console.log('data', res)
  })
  .catch((err) => {
    console.log(err)
  })
