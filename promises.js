
//using a callback
const getData = (callback) => {
  setTimeout(() => {
    callback('time is up')
  }, 3000)

}

getData((res) => {
  console.log(res)
})

//using a promise
const getDataPromise = (data) => new Promise((resolve, reject) => {
  setTimeout(() => {
    typeof data === 'number' ? resolve(data * 2) : reject('not a number')
  }, 2000)

})

getDataPromise(2)
  .then((res) => {
    getDataPromise(res)
      .then((res) => {
        console.log(res)
      })
  }, (e) => {     //error handling
    console.log(e)
  })

//promise chaining
getDataPromise(10)
  .then((res) => {
    return getDataPromise(res)
  })
  .then((res) => {
    return getDataPromise(res)
  })
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })
