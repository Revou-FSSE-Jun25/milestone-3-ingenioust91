import Header from '@/components/Header'
import React from 'react'

function PolicyPage() {
  return (
    <>
    <Header />
    <div className='lg:p-[1%_7%] mt-[12%] lg:mt-[7%]'>
        <h1 className='text-2xl text-center h-[10%]'><strong>Privacy Policy</strong></h1>
        <br/>

        <section>
        <p><strong>RevoShop</strong> ("we", "us", "our") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <a href="shop.byingesalim.site">[RevoShop]</a> (the "Site") and use our services.</p>
        </section>
        <br/>

        <hr/>
        <br/>
        <h2>1. Information We Collect</h2>
        <p>We may collect the following information:</p>
        <ul className='list-disc ml-4'>
            <li><strong>Personal Information:</strong> Name, email address, phone number, billing and shipping address, and payment details when you place an order or register an account.</li>
            <li><strong>Non-Personal Information:</strong> Browser type, IP address, device and operating system details, pages visited, and other analytics data.</li>
            <li><strong>Cookies & Tracking:</strong> Cookies, web beacons, and similar technologies to improve your experience and personalize content.</li>
        </ul>
        <br/>

        <hr/>
        <br/>
        <h2>2. How We Use Your Information</h2>
        <p>We use information for purposes including, but not limited to:</p>
        <ul className='list-disc ml-4'>
            <li>Processing and fulfilling orders, refunds, returns, and shipping.</li>
            <li>Communicating with you about orders, products, promotions, and account matters.</li>
            <li>Personalizing and improving our Site and services.</li>
            <li>Detecting and preventing fraud or other illegal activity.</li>
            <li>Complying with legal obligations.</li>
        </ul>
        <br/>

        <hr/>
        <br/>
        <h2>3. How We Share Your Information</h2>
        <p>We do not sell your personal information. We may share information with:</p>
        <ul className='list-disc ml-4'>
            <li><strong>Service Providers:</strong> Companies that help with payments, shipping, hosting, analytics, and marketing.</li>
            <li><strong>Legal Requests:</strong> Authorities when required by law, court order, or to protect rights and safety.</li>
            <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets.</li>
        </ul>
    </div>
    </>
  )
}

export default PolicyPage
