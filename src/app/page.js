import AnimatedHeader from './components/AnimatedHeader'

export default function Home() {
  return (
    <div className="min-h-screen w-screen bg-background bg-cover bg-no-repeat flex justify-center items-center">
      <AnimatedHeader />
      <h1 className="font-bold text-2xl text-white mt-44 pr-56">Gear Up. Stand Out. Win.</h1>
    </div>
  );
}
