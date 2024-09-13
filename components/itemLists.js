import React from 'react';
import { PinContainer } from "@/components/ui/3d-pin";
import AnimatedModalDemo from '@/app/trial/page';



export default function ItemLists({items}) {

  return (
    <div>
      <h1 className="text-lg">Your Adverts data</h1>
      {
        items.map((item) => (
          <div>
            <AnimatedModalDemo modaltrigger={
            <div className="h-[40rem] w-full flex items-center justify-center "
              onClick={ () => {

              }}
            >
              <PinContainer
                title={item.title}
                
              >
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
                  <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                    {item.h3}
                  </h3>
                  <div className="text-base !m-0 !p-0 font-normal">
                    <span className="text-slate-500">
                      {item.description}
                    </span>
                  </div>
                  <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                </div>
              </PinContainer>
            </div>}/>
          </div>
        ))
      }
    </div>
  );
}
