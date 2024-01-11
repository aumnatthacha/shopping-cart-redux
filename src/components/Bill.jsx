/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import qrcode from "qrcode";
import generatePayload from 'promptpay-qr';

const Bill = () => {
    const mobileNumber = "065-637-5524";
    const IdCardNumber = "065-637-5524";
    const [svg, setSvg] = useState("");
    const carts = useSelector((state) => state.carts);
    const subTotal = carts.reduce(
        (total, product) => total + product.quantity * product.price,
        0
    );
    const totalBilling = (subTotal) => {
        if (subTotal > 0) return subTotal + 35;
    };
    useEffect(() => {
        const total = totalBilling(subTotal);
        generate0R(total);
    }, [subTotal])

    
    const generate0R = (amount) => {
        //Convert to SVG OR Code
        const payload = generatePayload(mobileNumber, { amount });
        const options = { type: "svg", color: { dark: "#000", light: "#fff" } };
        qrcode.toString(payload, options, async (err, svg) => {
            if (err) return console.log(err);
            await setSvg(svg);
        });
    }

    //
    const handleCheckOut = () => {
        Swal.fire({
            title: "<strong>HTML <u>example</u></strong>",
            icon: "info",
            html: `
          <img src="data:image/svg+xml;utf8, ${encodeURIComponent(svg)}"/>
          Please use any Bank application scan this Qrcode to pay with Promptpay
        `,
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
        });

    };
    return (
        <div className='mt-6 rounded-lg border bg-white p-6 shadow-md md:mt-0'>
            <div className='mb-2 flex justify-between'>
                <p className='text-gray-700'>Subtotal</p>
                <p className='text-gray-700'>{subTotal}฿</p>
            </div>
            <div className='mb-2 flex justify-between'>
                <p className='text-gray-700'>Shopping</p>
                <p className='text-gray-700'>{subTotal > 0 ? "35฿" : 0}</p>
            </div>
            <hr className='my-4' />
            <div className='flex justify-between'>
                <p className='text-lg font-bold'>Total</p>
                <div>
                    <p className='mb-1 text-lg font-bold'>{subTotal > 0 ? totalBilling(subTotal) : 0}฿</p>
                    <p className='text-sm text-gray-700'>including VAT</p>
                </div>
            </div>
            <button className='mt-6 w-full rounded-md bg-blue-500 py-1 5 font-medium text-blue-50 hover:bg-blue-600'
                onClick={handleCheckOut}
            >
                Check Out
            </button>
        </div>
    )
}

export default Bill