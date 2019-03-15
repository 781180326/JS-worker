self.addEventListener('message',function(e){
	self.postMessage('Bo know' + e.data);
});

