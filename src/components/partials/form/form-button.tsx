import React from 'react';
import {LoaderCircle, SendHorizontal} from "lucide-react";
import {Button} from "@/components/ui/button";

type FormButtonProps = {
    isSubmitting: boolean
    isDirty: boolean
    isValid: boolean
}

function FormButton(props: Readonly<FormButtonProps>) {
    const {isSubmitting, isDirty, isValid} = props;

    return (
        <Button
            size={'sm'}
            disabled={isSubmitting || !isDirty || !isValid}
            type={'submit'}
            className={'transition-all duration-300'}
        >
            {isSubmitting ? (
                <LoaderCircle
                    className={'ml-2 h-4 w-4 animate-spin stroke-1 md:h-5 md:w-5'}
                />
            ) : (
                <div className={'flex items-center'}>
                    <span className={'text-xs md:text-sm'}>Kirim jawaban</span>
                    <SendHorizontal
                        className={'ml-2 h-4 w-4 stroke-1 md:h-5 md:w-5'}
                    />
                </div>
            )}
        </Button>
    );
}

export default FormButton;