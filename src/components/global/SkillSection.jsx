import React from 'react'

const SkillSection = () => {
  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32" >
        <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">

            <div className="space-y-2">

                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                        My Skills
                </h2>

                <p className="max-w-[900px]
                
                text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed

                ">
 Here are some of the technologies Im proficient in.
                </p>

            </div>
            </div>

<div className="mx-auto grid mt-10 max-w-5xl items-start gap-8 sm:grid-cols-3 md:gap-12 lg:grid-cols-5">
<img
  src="https://www.svgrepo.com/show/303500/react-1-logo.svg"
  width="90"
  height="90"
  alt="React"
  className="mx-auto rounded-full shadow-lg"
/>
  <img
  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1NAnlhSMbhwPtdLoWbm4WkAQu5qpPH_Hzw&s"
  width="90"
  height="90"
  alt="React"
  className="mx-auto rounded-full shadow-lg"
/>
  <img
  src="https://cdn3d.iconscout.com/3d/free/thumb/free-nodejs-9294859-7578002.png?f=webp"
  width="90"
  height="90"
  alt="React"
  className="mx-auto rounded-full shadow-lg"
/>
  <img
  src="https://e7.pngegg.com/pngimages/170/924/png-clipart-microsoft-sql-server-microsoft-azure-sql-database-microsoft-text-logo-thumbnail.png"
  width="90"
  height="90"
  alt="React"
  className="mx-auto rounded-full shadow-lg"
/>

<img
  src="https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Emblem.jpg"
  width="150"
  height="150"
  alt="React"
  className="mx-auto rounded-full shadow-lg"
/>     

</div>


        </div> 
    </section>
  )
}

export default SkillSection