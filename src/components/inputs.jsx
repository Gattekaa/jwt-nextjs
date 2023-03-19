import React from 'react';
import { VscArrowSmallRight } from 'react-icons/vsc';

const Inputs = ({user, setUser, type}) => {


    return (
        (type != 'signin') ?
        <>
            <div className="flex flex-col animate-slide-in-left">
                <label htmlFor="name" className="font-bold text-sm text-typography-light">Full Name</label>
                <input required value={user.name} onChange={e => { setUser({ ...user, name: e.target.value }) }} id="name" type="text" autoComplete="name" placeholder="Name" className="placeholder:text-typography-light py-3 border-b-2 outline-none" />
            </div>
            <div className="flex flex-col animate-slide-in-left">
                <label htmlFor="email" className="font-bold text-sm text-typography-light">Email</label>
                <input required value={user.email} onChange={e => { setUser({ ...user, email: e.target.value }) }} id="email" type="email" placeholder="Email address" className="placeholder:text-typography-light py-3 border-b-2 outline-none" />
            </div>
            <div className="flex flex-col animate-slide-in-left">
                <label htmlFor="username" className="font-bold text-sm text-typography-light">Username</label>
                <input required value={user.username} onChange={e => { setUser({ ...user, username: e.target.value }) }} id="username" type="text" placeholder="Username" autoComplete='username' className="placeholder:text-typography-light py-3 border-b-2 outline-none" />
            </div>
            <div className="flex flex-col animate-slide-in-left">
                <label htmlFor="password" className="font-bold text-sm text-typography-light">Password</label>
                <input required value={user.password} onChange={e => { setUser({ ...user, password: e.target.value }) }} id="password" type="password" autoComplete="new-password" placeholder="••••••••" className="placeholder:text-typography-light py-3 border-b-2 outline-none" />
            </div>
            <div className="flex flex-col animate-slide-in-left">
                <label htmlFor="password_confirm" className="font-bold text-sm text-typography-light">Repeat Password</label>
                <input required value={user.password_confirm} onChange={e => { setUser({ ...user, password_confirm: e.target.value }) }} id="password_confirm" autoComplete="new-password" type="password" placeholder="••••••••" className="placeholder:text-typography-light py-3 border-b-2 outline-none" />
            </div>
        </>
        : 

        <>
            <div className="flex flex-col animate-slide-in-left">
                <label htmlFor="username" className="font-bold text-sm text-typography-light">Username</label>
                <input required value={user.username} onChange={e => { setUser({ ...user, username: e.target.value }) }} id="username" type="text" placeholder="Username" autoComplete='username' className="placeholder:text-typography-light py-3 border-b-2 outline-none" />
            </div>
            <div className="flex flex-col animate-slide-in-left">
                <label htmlFor="password" className="font-bold text-sm text-typography-light">Password</label>
                <input required value={user.password} onChange={e => { setUser({ ...user, password: e.target.value }) }} id="password" type="password" autoComplete="new-password" placeholder="••••••••" className="placeholder:text-typography-light py-3 border-b-2 outline-none" />
            </div>
        </>
    )
}

export default Inputs