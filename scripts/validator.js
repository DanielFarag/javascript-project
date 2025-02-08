export function validator(){
    const validators = {
        count: (input)=>{

            let error = input.parentNode.querySelector(".errors")
    
            if(!/^[0-9]+$/.test(input.value)){
                input.classList.add("invalid")
                error.innerHTML = "Invalid Books number"
                return false;
            }
            input.classList.remove("invalid")
            error.innerHTML = ""
    
            return true;
        },
        name: (input)=>{
            let error = input.parentNode.querySelector(".errors")

            if(!/^[a-zA-Z\s]+$/.test(input.value)){
                input.classList.add("invalid")
                error.innerHTML = "Invalid Books Name"
                return false;
            }
            input.classList.remove("invalid")
            error.innerHTML = ""
    
            return true;
        },
        date: (input)=>{
            let error = input.parentNode.querySelector(".errors")
            if(!/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(input.value)){
                input.classList.add("invalid")
                error.innerHTML = "Invalid Books Date"
                return false;
            }
            input.classList.remove("invalid")
            error.innerHTML = ""
    
            return true;
    
        },
        price: (input)=>{
            let error = input.parentNode.querySelector(".errors")
    
            if(!/^[0-9]+$/.test(input.value)){
                input.classList.add("invalid")
                error.innerHTML = "Invalid Price"
                return false;
            }
            input.classList.remove("invalid")
            error.innerHTML = ""
    
            return true;
        },
        author_name: (input)=>{
            let error = input.parentNode.querySelector(".errors")
    
            if(!/^[a-zA-Z\s]+$/.test(input.value)){
                input.classList.add("invalid")
                error.innerHTML = "Invalid Author Name"
                return false;
            }
            input.classList.remove("invalid")
            error.innerHTML = ""
    
            return true;
    
        },
        author_email: (input)=>{
            let error = input.parentNode.querySelector(".errors")
    
            if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(input.value)){
                input.classList.add("invalid")
                error.innerHTML = "Invalid Auth Email"
                return false;
            }
            input.classList.remove("invalid")
            error.innerHTML = ""
    
            return true;
        }
    }
    
    
    return validators
}