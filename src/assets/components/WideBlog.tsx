import { useMediaQuery } from 'react-responsive';
import '../../App.css'
import { ReactNode } from 'react';


type Props = {
    title: string;
    children: ReactNode;
    role?: string;
    image?: string;
    git_url?: string;
    proj_url?: string;
}

const WideBlog = ({ title, children, role = "", image = "", git_url = "", proj_url = ""}: Props) => {
    //Remember this determines type
    let type = "git"
    const handleRedirect = () => {
        if(type == "git"){
            window.open(git_url, "_blank"); 
        }
        if(type == "project_url"){
            window.open(proj_url, "_blank")
        }
    };
    //Changes apperance based on width (medium size)
    const isDesktop = useMediaQuery({ minWidth: 768 });
    return (
        <>
            {isDesktop ? (
                // Desktop version: 
                <div className="overflow-hidden duration-100 relative min-w-[600px] w-[80vw] max-w-[1000px] h-[400px] sm:h-[550px] md:h-[300px] hover:scale-105 shadow-lg border-[1px] border-[#FFF5F580] bg-white bg-opacity-5 rounded-3xl text-white mb-[40px]">
                    <div className="w-7/12 flex flex-col items-left ml-[20px] mt-[15px] text-left">
                        <h2 className="font-montserrat font-semibold text-[30px]"> {title} </h2>
                        {(role != "") ? <h3 className="font-montserrat text-[18px] mt-[5px]">{role}</h3> : null}
                        <div className="overflow-hidden mb-[20px]">
                            <p className="text-[12px] xl:text-[16px] sm:mt-[10px]"> {children} </p>
                        </div>
                        {(git_url != "") ? 
                            <button onClick={handleRedirect} title="github" className="duration-150 hover:bg-[#c9c5d3] inline-flex flex-row items-center justify-around mx-[10px] mb-[10px] bg-[#f1f0f3] border-none text-black font-montserrat font-bold w-[100px] lg:w-[140px] px-[5px] py-[5px] text-center no-underline text-sm lg:text-lg rounded-3xl">
                                Github
                                <img src="github.png" alt="" className="w-[32px]" />
                            </button>
                        : null}
                    </div>
                    <img src={image} alt="" className="maskhoz object-contain absolute right-0 top-0 w-[1/2] h-full"></img>
                </div>
            ) : (
                // Mobile version: 
                <div className="overflow-hidden duration-100 flex flex-col items-center min-w-[250px] max-w-[80vw] max-h-[450px] sm:max-h-[500px] hover:scale-105 shadow-lg border-[1px] border-[#FFF5F580] bg-white bg-opacity-5 rounded-3xl text-white mb-[40px]">
                <img src={image} alt="" className="bg-contain w-full max-h-[200px] maskvert"></img>
                <h2 className="text-center font-montserrat font-semibold text-[20px] sm:text-[30px] mt-[15px] mx-[15px] sm:mt-[10px]"> {title} </h2>
                {(role != "") ? <h3 className="font-montserrat text-center text-[16px] sm:text-[20px] sm:mt-[-5px]">{role}</h3> : null}
                <div className="overflow-hidden mb-[20px] mx-[20px]">
                    <p className="text-center text-[14px] sm:mt-[14px]"> {children} </p>
                </div>
                {(git_url != "") ? 
                    <button onClick={handleRedirect} title="github" className="duration-150 hover:bg-[#c9c5d3] inline-flex flex-row items-center justify-around mx-[10px] mb-[10px] bg-[#f1f0f3] border-none text-black font-montserrat font-bold w-[100px] lg:w-[140px] px-[5px] py-[5px] text-center no-underline text-sm lg:text-lg rounded-3xl">
                        Github
                        <img src="github.png" alt="" className="w-[32px]" />
                    </button>
                : null}
                </div>
            )}
        </>
    );
}

export default WideBlog