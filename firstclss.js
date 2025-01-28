    function x(a){
        console.log("one")
        a()
    }
    x(function(){
        console.log("two")
    })