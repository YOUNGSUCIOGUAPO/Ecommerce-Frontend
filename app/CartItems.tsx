"use client";
import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import DropUp from "../public/assets/images/Drop-Up-Small.svg";
import DropDown from "../public/assets/images/Drop-Down-Small.svg";
import cartIcon from "../public/assets/images/Cart1.svg";
import Image from "next/image";
import { useCustomContext } from "./context/ContextApp";
import { useRouter } from "next/navigation";
import Link from "next/link";

const CartItems: React.FC = () => {
  const router = useRouter();
  const [removeItemIndex, setRemoveItemIndex] = useState<number | null>(null);
  const {
    cart,
    removeItemHandler,
    increaseQuantityHandler,
    decreaseQuantityHandler,
    getCartProducts,
  } = useCustomContext();

  const getTotal = (): string => {
    const total = cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
    return total;
  };

  useEffect(() => {
    getCartProducts();
  }, []);

  return (
    <section className="px-[5%] py-24 pt-52">
      <div className="flex gap-2 text-[14px] mb-20 w-8">
        <Link href="/">Home</Link>
        <span> / </span>
        <span className="text-gray-500">Cart</span>
      </div>
      {/* header row */}

      {cart.length ===0 ? (
        <div className="shadow-[0px_1px_13px_0px_rgba(0,0,0,0.05)] rounded rounded-tl-md py-5 flex flex-col gap-4 justify-center items-center">
          <div className="w-[50px] h-[50px] rounded-full bg-gray-300 flex items-center justify-center">
            <Image src={cartIcon} alt="" />
          </div>
          <h3>Your cart is empty!</h3>
          <p>Browse our categories and discover our best deals!</p>
          <Button onClick={() => router.push("/")}>START SHOPPING</Button>
        </div>
      ) : (
        <>
          <div className="grid px-[40px]  grid-cols-4 w-full h-[72px] p-[1.5rem_2.5rem] shadow-[0px_1px_13px_0px_rgba(0,0,0,0.05)] rounded rounded-tl-md">
            <div>
              <span>Product</span>
            </div>

            <div className="ml-10">
              <span>Price</span>
            </div>

            <div className="flex justify-center">
              <span>Quantity</span>
            </div>

            <div className="justify-self-end">
              <span>Subtotal</span>
            </div>
          </div>

          {cart.map((cart) => (
            <div
              onMouseEnter={() => setRemoveItemIndex(cart.id)}
              onMouseLeave={() => setRemoveItemIndex(null)}
              key={cart.id}
              className="grid grid-cols-4 w-full h-[72px] pr-[38px] pl-4 shadow-[0px_1px_13px_0px_rgba(0,0,0,0.05)] rounded rounded-tl-md"
            >
              <div className="flex items-center gap-[15px]">
                <div className="relative">
                  {removeItemIndex === cart.id && (
                    <span
                      onClick={() => removeItemHandler(cart.id)}
                      className="w-6 h-6 bg-[#db0000] absolute right-12 cursor-pointer text-white font-normal text-sm rounded-full flex items-center justify-center"
                    >
                      X
                    </span>
                  )}
                  <Image src={cart.image_url} height={54} width={54} alt="" />
                </div>

                <span>{cart.title.split(" ").slice(0, 2).join(" ")}</span>
              </div>

              <div className="ml-14 flex items-center">
                <span>${cart.price}</span>
              </div>

              <div className="flex justify-center items-center ml-4">
                <div className="flex justify-center w-[72px] h-[44px] border rounded-[4px] gap-4 items-center px-2">
                  <span>{cart.quantity}</span>
                  <div className="flex flex-col">
                    <Image
                      className="cursor-pointer"
                      src={DropUp}
                      onClick={() => increaseQuantityHandler(cart.id)}
                      alt=""
                    />
                    <Image
                      className={`cursor-pointer ${
                        cart.quantity === 1 && "opacity-50 pointer-events-none"
                      }`}
                      src={DropDown}
                      onClick={() => decreaseQuantityHandler(cart.id)}
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-self-end items-center">
                <span>{(cart.quantity * cart.price).toFixed(2)}</span>
              </div>
            </div>
          ))}

          <div className="flex justify-between items-center pt-4">
            <button
              onClick={() => router.push("/")}
              className="border rounded-[4px] p-[16px_48px]"
            >
              Return To Shop
            </button>
          </div>

          {/* Input and Button Section */}
          <div className="flex items-start justify-between pt-[80px]">
            <div className="flex gap-4">
              <input
                className="w-[18.75rem] border rounded-[4px] text-base font-normal pl-6 leading-6"
                placeholder="Coupon Code"
              />
              <Button>Apply Coupon</Button>
            </div>

            {/* Cart Total Section */}
            <div className="border border-black rounded-[4px] p-[32px_24px]  w-[29rem]">
              <h3 className="text-[1.25rem] pb-6 font-medium">Cart Total</h3>
              <div className="flex justify-between pb-2">
                <span>Subtotal: </span>
                <span>${getTotal()}</span>
              </div>
              <hr className="my-[2%] h-[1px]  pb-2" />
              <div className="flex justify-between text-base font-normal  pb-2">
                <span>Shipping: </span>
                <span>Free</span>
              </div>
              <hr className="my-[2%] h-[1px]   pb-2" />
              <div className="flex justify-between  pb-[16px]">
                <span>Total: </span>
                <span>${getTotal()}</span>
              </div>
              <div className="flex justify-center">
                <Button className="w-[16.25rem]">Process to checkout</Button>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};
export default CartItems;
