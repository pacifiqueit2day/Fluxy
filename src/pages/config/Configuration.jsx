import React, { useRef } from 'react'
import { Button } from 'primereact/button';
import { Stepper } from 'primereact/stepper';
import { StepperPanel } from 'primereact/stepperpanel';
import ConfigLayout from './ConfigLayout';


export default function Configuration() {
    const stepperRef = useRef(null);

    return (
        <ConfigLayout>
            <div className='bg-background text-foreground rounded-lg p-2 shadow-default border border-border'>
                <Stepper ref={stepperRef} style={{ flexBasis: '50rem' }} orientation="vertical">
                    <StepperPanel header="Header I">
                        <div className="flex flex-col content-height">
                            <div className="">Content I</div>
                        </div>
                        <div className="flex py-4">
                            <Button size='small' className="p-button-sm" label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()} />
                        </div>
                    </StepperPanel>
                    <StepperPanel header="Header II">
                        <div className="flex flex-col content-height">
                            <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content II</div>
                        </div>
                        <div className="flex py-4 gap-2">
                            <Button size='small' label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()} />
                            <Button size='small' label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()} />
                        </div>
                    </StepperPanel>
                    <StepperPanel header="Header III">
                        <div className="flex flex-col content-height">
                            <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content III</div>
                        </div>
                        <div className="flex py-4">
                            <Button size='small' label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()} />
                        </div>
                    </StepperPanel>
                </Stepper>
            </div>
        </ConfigLayout>
    )
}
