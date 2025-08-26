import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedGroup } from "@/components/ui/animated-group";

export default function HeroSection() {
  return (
    <>
      {/* Background Effects */}
      <div 
        aria-hidden
        className="z-[2] absolute inset-0 pointer-events-none isolate opacity-50 contain-strict hidden lg:block"
      >
        <div className="w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
        <div className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
        <div className="h-[80rem] -translate-y-[350px] absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
      </div>
      <main className="overflow-hidden bg-background dark:bg-background">
        <section>
          <div className="relative pt-24 md:pt-36">
            {/* Background Image for Dark Mode */}
            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      delayChildren: 1,
                    },
                  },
                },
                item: {
                  hidden: {
                    opacity: 0,
                    y: 20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: 'spring',
                      bounce: 0.3,
                      duration: 2,
                    },
                  },
                },
              }}
              className="absolute inset-0 -z-20"
            >
              <div 
                className="absolute inset-x-0 top-56 -z-20 hidden lg:top-32 dark:block w-full h-full opacity-20"
                style={{
                  backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(0, 240, 216, 0.1) 0%, transparent 50%)',
                }}
              />
            </AnimatedGroup>
            
            {/* Radial gradient overlay */}
            <div 
              aria-hidden 
              className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]" 
            />
            
            <div className="mx-auto max-w-7xl px-6">
              <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                <AnimatedGroup 
                  variants={{
                    container: {
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.2,
                          delayChildren: 0.3,
                        },
                      },
                    },
                    item: {
                      hidden: {
                        opacity: 0,
                        filter: 'blur(12px)',
                        y: 12,
                      },
                      visible: {
                        opacity: 1,
                        filter: 'blur(0px)',
                        y: 0,
                        transition: {
                          type: 'spring',
                          bounce: 0.3,
                          duration: 1.5,
                        },
                      },
                    },
                  }}
                >
                  {/* Announcement Badge */}
                  <a
                    href="#link"
                    className="hover:bg-[#00F0D8]/20 dark:hover:bg-[#00F0D8]/10 bg-[#00F0D8]/10 border-[#00F0D8]/30 group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-[#00F0D8]/10 transition-all duration-300 backdrop-blur-sm"
                    data-testid="announcement-badge"
                  >
                    <span className="font-medium text-sm text-[#009999]">Novidade: PIX Automático Disponível</span>
                    <span className="block h-4 w-0.5 border-l border-[#00F0D8]/50 bg-[#00F0D8]/50 pl-[0px] pr-[0px] ml-[1px] mr-[1px]"></span>

                    <div className="bg-[#00F0D8]/20 group-hover:bg-[#00F0D8]/30 size-6 overflow-hidden rounded-full duration-500">
                      <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                        <span className="flex size-6">
                          <ArrowRight className="m-auto size-3 text-[#00F0D8]" />
                        </span>
                        <span className="flex size-6">
                          <ArrowRight className="m-auto size-3 text-[#00F0D8]" />
                        </span>
                      </div>
                    </div>
                  </a>
                  
                  {/* Main Heading */}
                  <h1
                    className="mt-8 max-w-4xl mx-auto text-balance text-6xl md:text-7xl lg:mt-16 xl:text-[5.25rem] font-bold text-foreground"
                    data-testid="heading-hero-title"
                  >
                    Soluções Financeiras Inteligentes para o Seu Negócio
                  </h1>
                  
                  {/* Description */}
                  <p
                    className="mx-auto mt-8 max-w-2xl text-balance text-lg text-muted-foreground"
                    data-testid="text-hero-description"
                  >
                    Plataforma completa de pagamentos PIX, Open Finance e gestão de dados empresariais. Conecte, automatize e acelere seus processos financeiros com tecnologia de ponta.
                  </p>
                </AnimatedGroup>

                {/* Action Buttons */}
                <AnimatedGroup
                  variants={{
                    container: {
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.75,
                        },
                      },
                    },
                    item: {
                      hidden: {
                        opacity: 0,
                        filter: 'blur(12px)',
                        y: 12,
                      },
                      visible: {
                        opacity: 1,
                        filter: 'blur(0px)',
                        y: 0,
                        transition: {
                          type: 'spring',
                          bounce: 0.3,
                          duration: 1.5,
                        },
                      },
                    },
                  }}
                  className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row"
                >
                  <div className="bg-foreground/10 rounded-[14px] border p-0.5">
                    <Button
                      size="lg"
                      className="rounded-xl px-5 text-base"
                      data-testid="button-start-building"
                    >
                      <span className="text-nowrap">Começar Agora</span>
                    </Button>
                  </div>
                  <Button
                    size="lg"
                    variant="ghost"
                    className="h-10.5 rounded-xl px-5"
                    data-testid="button-request-demo"
                  >
                    <span className="text-nowrap">Falar com Especialista</span>
                  </Button>
                </AnimatedGroup>
              </div>
            </div>

            {/* Hero Image/Dashboard Preview */}
            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.75,
                    },
                  },
                },
                item: {
                  hidden: {
                    opacity: 0,
                    filter: 'blur(12px)',
                    y: 12,
                  },
                  visible: {
                    opacity: 1,
                    filter: 'blur(0px)',
                    y: 0,
                    transition: {
                      type: 'spring',
                      bounce: 0.3,
                      duration: 1.5,
                    },
                  },
                },
              }}
            >
              <div className="relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
                <div
                  aria-hidden
                  className="bg-gradient-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
                />
                <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1">
                  {/* Dashboard Image - Dark Mode */}
                  <div 
                    className="bg-background aspect-[15/8] relative hidden rounded-2xl dark:block bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900"
                    data-testid="dashboard-preview-dark"
                  >
                    <div className="absolute inset-4 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="space-y-3">
                        <div className="h-4 bg-gradient-to-r from-[#00F0D8] to-transparent rounded w-3/4"></div>
                        <div className="h-3 bg-zinc-700 rounded w-1/2"></div>
                        <div className="h-3 bg-zinc-700 rounded w-2/3"></div>
                        <div className="mt-6 grid grid-cols-3 gap-4">
                          <div className="h-16 bg-zinc-700 rounded"></div>
                          <div className="h-16 bg-zinc-700 rounded"></div>
                          <div className="h-16 bg-zinc-700 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Dashboard Image - Light Mode */}
                  <div 
                    className="z-2 border-border/25 aspect-[15/8] relative rounded-2xl border dark:hidden bg-gradient-to-br from-gray-50 via-white to-gray-100"
                    data-testid="dashboard-preview-light"
                  >
                    <div className="absolute inset-4 rounded-xl bg-white shadow-inner p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="space-y-3">
                        <div className="h-4 bg-gradient-to-r from-[#00F0D8] to-transparent rounded w-3/4"></div>
                        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                        <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                        <div className="mt-6 grid grid-cols-3 gap-4">
                          <div className="h-16 bg-gray-100 rounded border"></div>
                          <div className="h-16 bg-gray-100 rounded border"></div>
                          <div className="h-16 bg-gray-100 rounded border"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedGroup>
          </div>
        </section>
      </main>
    </>
  );
}