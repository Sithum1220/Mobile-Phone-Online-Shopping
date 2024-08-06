import iphone15ProMax from '../../../images/iphone15promax.png';
export function Home() {
    return (
        <>
            <div className="bg-[#212529] ">
                <div className="mx-auto flex max-w-[1240px] py-7 h-[490px] justify-between items-center">
                    <div className="flex flex-col gap-8 pl-10 items-start">
                        <h1 className="text-white text-6xl font-light">New Collection <br/> Coming to town</h1>
                        <p className="text-text text-2xl font-light">Introducing fashionable & gorgeous <br/>
                            phone From design to stylish wearable</p>
                        <button className="bg-primary text-white font-light text-[12px] py-3 px-8 rounded-3xl mt-8
                        hover:text-black hover:bg-white transition-colors duration-500 ease-in-out ">
                            READ MORE
                        </button>
                    </div>
                    <img src={iphone15ProMax} className="w-[30%]" alt=""/>
                </div>
            </div>
        </>
    );
}