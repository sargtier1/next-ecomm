function catchErrors(error, displayError) {
  let errorMsg
  if (error.response) {
    // req was made and server responded with status code not in the range of 200
    errorMsg = error.response.data
    console.error('error response', errorMsg)
    // for cloudinary
    if (error.response.data.error) {
      errorMsg = error.response.data.error.message
    }
  } else if (error.request) {
    // request was made, but no response was received
    errorMsg = error.request
    console.error('error request', errorMsg)
  } else {
    // something else happened that sent an err
    errorMsg = error.message
    console.error('error message', errorMsg)
  }
  displayError(errorMsg)
}

export default catchErrors
