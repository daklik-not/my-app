import Image from 'next/image'
import bg from './bg.jpg'
export default function Home() {
  return (
    <>
     
 <Image
      alt="Mountains"
      src={bg}
      placeholder="blur"
      quality={100}   
      style={{
        width: '100%',
        height: 'auto',
      }}
    />
 
 </>
  )
}
