import { signIn } from "@/lib/auth-client"

export default function SocialSignInSignUp() {

      const googleSignIn = async () => {
          const resData = await signIn.social({
            provider: 'google'
          })
    
          console.log(resData)
        }
    
        const githubSignIn = async () => {
          const resData = await signIn.social({
            provider: 'github'
          })
    
          console.log(resData)
        }
    
  return (
    <div className="flex gap-2">
        <button onClick={() => googleSignIn()} className='flex-1 p-2.5 border border-base-300 rounded-2xl text-sm font-semibold cursor-pointer'>Google দিয়ে চালিয়ে যান</button>
        <button onClick={() => githubSignIn()} className='flex-1 p-2.5 border border-base-300 rounded-2xl text-sm font-semibold cursor-pointer'>Github দিয়ে চালিয়ে যান</button>
    </div>
  )
}
