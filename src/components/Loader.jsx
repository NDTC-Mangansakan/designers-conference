import { RiLoader4Fill } from '@remixicon/react'

const Loader = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <p className="text-3xl font-bold italic flex items-center gap-x-2">
                <RiLoader4Fill size={50} className='animate-spin text-primary' /> Loading ...
            </p>
        </div>
    )
}

export default Loader