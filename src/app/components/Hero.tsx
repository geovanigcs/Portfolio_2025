import Image from "next/image";
import memojiImage from "@/assets/images/memoji-computer.png";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from '@/assets/icons/star.svg';
import SparkleIcon from '@/assets/icons/sparkle.svg';
import { HeroOrbit } from "@/app/components/ui/HeroOrbit";
import { Avatar } from "./ui/Avatar";

export const Hero = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div className="absolute inset-0 -z-30 opacity-5" style={{ backgroundImage: `url(${grainImage.src})` }}></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        <HeroOrbit size={800} rotation={-72}>
          <StarIcon className="size-28 text-[#19ffde]" />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20}>
          <StarIcon className="size-12 text-[#19ffde]" />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98}>
          <StarIcon className="size-8 text-[#19ffde]" />
        </HeroOrbit>
        <HeroOrbit size={430} rotation={-14}>
          <SparkleIcon className="size-8 text-[#19ffde]/20" />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={79}>
          <SparkleIcon className="size-5 text-[#19ffde]/20" />
        </HeroOrbit>
        <HeroOrbit size={530} rotation={178}>
          <SparkleIcon className="size-10 text-[#19ffde]/20" />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={144}>
          <SparkleIcon className="size-14 text-[#19ffde]/20" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85}>
          <div className="rounded-full size-3 bg-[#19ffde]"></div>
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41}>
          <div className="rounded-full size-2 bg-[#19ffde]"></div>
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5}>
          <div className="rounded-full size-2 bg-[#19ffde]"></div>
        </HeroOrbit>
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          {/* <Image
            src={memojiImage}
            alt="Person peeking from behind laptop"
            width={100}
            height={100}
          /> */}
          <Avatar />
          <div className="bg-black border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 rounded-full size-2.5 relative">
              <div className="bg-green-500 rounded-full absolute inset-0 animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">Avalie meus novos projetos</div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">Criando experiências excepcionais para o usuário</h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            Sou especialista em transformar designs em aplicações web funcionais e
            de alto desempenho. Vamos discutir seu próximo projeto!
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl z-20">
            <span className="font-semibold">Explore meu trabalho</span>
            <ArrowDown className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl z-20">
            <span>👋</span>
            <span className="font-semibold">Vamos conversar?</span>
          </button>
        </div>
      </div>
    </div>
  );
};
