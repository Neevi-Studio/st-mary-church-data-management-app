'use client';
import { useMutation } from '@tanstack/react-query';
import Image from 'next/image';
import React from 'react';
import { Button, Input, Spinner } from '@nextui-org/react';
import toast from 'react-hot-toast';
import { SubmitHandler, useForm } from 'react-hook-form';
import { LoginDto } from '@/Api';
import { BsEyeFill } from 'react-icons/bs';
import { TbEyeMinus } from 'react-icons/tb';
import { useAuthContext } from '@/components/context/AuthContext';
import { apiLoginUser } from '@/components/utils/HiddenRequests';

function LoginPage() {

    const { getMyInfo } = useAuthContext()

    const {
        mutate: login,
        error,
        isPending
    } = useMutation({
        mutationKey: ['login'],
        mutationFn: apiLoginUser,
        onSuccess: async () => {
            await getMyInfo()
            toast.success('Logged in successfully!')
        },
        onError: (error: any) => {
            console.log(error)
        }
    });


    const {
        register,
        watch,
        formState: { errors },
        handleSubmit,
    } = useForm<LoginDto>();

    const onSubmit: SubmitHandler<LoginDto> = (data) => login(data)


    const [isVisible, setIsVisible] = React.useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);



    return (
        <form
            onSubmit={handleSubmit(
                onSubmit as SubmitHandler<LoginDto>
            )}
            className="w-full max-h-screen h-screen flex flex-row  items-center  justify-between  "
        >
            <div className="flex flex-col w-full h-full  justify-evenly  pt-10 pb-4  px-10 md:px-32 xl:px-[20%] md:justify-between md:w-2/3">
                <Image
                    src="/next.svg"
                    width={150}
                    className="mb-4"
                    height={150}
                    alt="logo"
                />
                <div className="flex flex-col  w-full gap-y-5  ">
                    <p className=" text-black text-4xl font-semibold mb-5 ">Login</p>
                    <div className=" flex-col justify-start items-start gap-1.5 flex">
                        <p className="text-[#344054] text-sm font-medium  ">Email</p>
                        <Input
                            value={watch('email')}
                            {...register('email', {
                                required: 'This Field is required'
                            })}
                            isInvalid={!!errors.email}
                            errorMessage={errors?.email?.message}
                            size="sm"
                            width={'100%'}
                            variant="bordered"
                            className=" w-full   rounded-lg   bg-white"
                            placeholder="Enter your email..."
                            type="email"
                        />
                    </div>

                    <div className=" flex-col  gap-1.5 flex">
                        <p className="text-[#344054] text-sm font-medium  ">Password</p>
                        <Input
                            size="sm"
                            width={'100%'}
                            variant="bordered"
                            endContent={
                                <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                                    {isVisible ? (
                                        <BsEyeFill className="text-2xl text-default-400 pointer-events-none" />
                                    ) : (
                                        <TbEyeMinus className="text-2xl text-default-400 pointer-events-none" />
                                    )}
                                </button>
                            }
                            type={isVisible ? "text" : "password"}
                            {...register('password', {
                                required: 'This Field is required'
                            })}
                            isInvalid={!!errors.password}
                            errorMessage={errors?.password?.message}
                            className=" w-full   rounded-lg   bg-white"
                            placeholder="Enter your password..."
                        />
                    </div>

                    <div className={'h-2 text-red mb-4'}>
                        {error && (
                            <span className="text-red-500">
                                {typeof error === 'object' && error.response?.data?.message
                                    ? error.response.data.message
                                    : error.message || 'An error occurred'}
                            </span>
                        )}
                    </div>

                    <Button
                        type={'submit'}
                        className=" py-2.5 bg-[#264744] rounded-lg   justify-center items-center gap-2  text-white  text-base font-semibold  leading-normal"
                    >
                        {isPending ? <Spinner color="white" size="sm" /> : 'Sign in'}
                    </Button>
                </div>

                <p className="text-slate-600 text-sm font-normal    ">
                    © NeeviStudio 2025.
                </p>
            </div>
            <div className="hidden md:flex relative h-full w-1/3">
                <Image
                    src="/login.jpeg"
                    className="object-cover object-center "
                    alt="login"
                    fill
                />
            </div>
        </form>
    );
}

export default LoginPage;
