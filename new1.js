let url='http://api.github.com/users/Sonu2030';
let b=fetch(url);
b.then((data)=>{
    console.log(data)
    return data.json();

}).catch(()=>{
    console.log('error')
}).finally(()=>{
    console.log('forst')
})