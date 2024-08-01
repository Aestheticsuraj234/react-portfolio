
import { useState } from 'react';
import { Button } from '../ui/button'



const ContactSection = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");



    const handleChange = (e) => {
        const { name, value } = e.target
        if (name === "username") {
            setUsername(value)
        }
        else if(name==="email"){
            setEmail(value)
        }
        else{
            setMessage(value)
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            username,
            email,
            message
        })
        
     }





    return (
        <section id="contact" className='w-full py-12 md:py-24 lg:py-32 bg-muted'>

            <div className='container px-4 md:px-6'>

                <div className="flex flex-col items-center justify-center space-y-4 text-center">

                    <div className="space-y-2">
                        <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                            Contact Me.
                        </h2>

                        <p className="max-w-[900ox]
            text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed
            ">
                            I am available for freelance work. Lets work together and build something amazing.

                        </p>

                        <div className="mx-auto w-full max-w-sm space-y-2">

                            <form className="flex flex-col gap-4 boder border-md shadow-md bg-white px-4 py-2 m-4" onSubmit={handleSubmit} >
                                <input
                                    type="text"
                                    value={username}
                                    onChange={handleChange}
                                    placeholder="Name"
                                    name="username"
                                    className="max-w-lg flex-1 px-2 py-2 rounded-md border"
                                />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={handleChange}
                                    placeholder="Email"
                                    name="email"
                                    className="max-w-lg flex-1 px-2 py-2 rounded-md border"
                                />
                                <textarea
                                    value={message}
                                    onChange={handleChange}
                                    name="message"
                                    placeholder="Enter Your Message..."
                                    className="max-w-lg flex-1 px-2 py-2 rounded-md border"
                                />
                                <Button type="submit">Submit</Button>

                            </form>

                        </div>



                    </div>
                </div>

            </div>


        </section>
    )
}

export default ContactSection





// const [count, setCount] = useState(0);
// const onMinus = ()=>{
//     if(count>0){
//         setCount(count-1)
//     }
//     else{
//         alert("Count cannot be less than 0")
//     }

// }
// const onPlus = ()=>{
//     setCount(count+1)
// }


// <div className="flex flex-row justify-center items-center gap-6 mt-6">
//             <Button variant="destructive" size={"icon"} onClick={onMinus}>
//                 -
//             </Button>

//             {count}
//             <Button size={"icon"} onClick={onPlus}>
//                 +
//             </Button>
//         </div>
