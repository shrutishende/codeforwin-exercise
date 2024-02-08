const num = 0

switch (num > 0){
    case true:
        console.log("positive")
        break
    case false:
        switch (num < 0){
            case true:
                console.log("negative")
                break
            case false :
                console.log("zero")
                break
        }

}