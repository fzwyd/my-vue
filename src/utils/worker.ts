self.onmessage = function (event) {
  console.log('Message from main thread:', event.data)
  self.postMessage('Hello Main Thread')
}
