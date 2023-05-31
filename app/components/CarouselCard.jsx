import Image from "next/image";

export default function CarouselCard({image, title, language, description}) {
    return (
        <div class="flip-box m-auto">
            <div class="flip-box-inner m-auto">
                <div class="flip-box-front">
                    <Image src={image} alt="Paris" width={1200} height={800} />
                </div>
                <div class="flip-box-back">
                    <h2>{title}</h2>
                    {language.map(lang => {
                        <p>{lang}</p>
                    })}
                </div>
            </div>
        </div>
    );
}