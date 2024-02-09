const a =4
const b =-2
const c = 10

const discriminant = (b*b)- (4*a*c)

switch (discriminant > 0){
    case true:
        const root1 = (-b+ Math.sqrt(discriminant))/(2*a)
        console.log(root1)
        const root2 = (-b- Math.sqrt(discriminant))/(2*a)
        console.log(root2)
        break
    case false :
        console.log("negative")

        switch (discriminant === 0){
            case true:
                const root3 = -b/2*a
                console.log(root3)
                break
        }

}