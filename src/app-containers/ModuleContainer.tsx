import { ReactNode } from 'react';

type TModuleContainer = {
    children: ReactNode
}

function ModuleContainer({ children }: TModuleContainer) {
    return (
        <section className="mx-auto px-10 container ">
            {children}
        </section>

    )
}

export default ModuleContainer;