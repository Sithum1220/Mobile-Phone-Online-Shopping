export function FooterCategories(props:any) {
    return (
        <div>
            <h1 className="text-white font-thin opacity-90 text-lg sm:text-xl mb-4">{props.title}</h1>
            <ul className="flex flex-col gap-3">
                {[props.txt1, props.txt2, props.txt3, props.txt4, props.txt5].map((text, index) => (
                    <li key={index} className="text-text font-light text-sm hover:text-white cursor-pointer transition-all duration-300 opacity-65 hover:opacity-100">
                        <a href="#">{text}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}