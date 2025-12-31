"use client";

import BtnCTA1 from "@/components/BtnCTA1";
import { RiArrowRightLine, RiHomeLine } from "@remixicon/react";

export default function StyleGuidePage() {
    const colors = [
        { name: "Primary", class: "bg-primary" },
        { name: "Secondary", class: "bg-secondary" },
        { name: "Base", class: "bg-base", border: true },
        { name: "Gold 1", class: "bg-gold1" },
        { name: "Gold 2", class: "bg-gold2" },
        { name: "Gold 3", class: "bg-gold3" },
        { name: "Primary 1", class: "bg-primary1" },
        { name: "Primary 2", class: "bg-primary2" },
        { name: "Primary 3", class: "bg-primary3" },
        { name: "Accent 1", class: "bg-accent1" },
        { name: "Accent 2", class: "bg-accent2" },
        { name: "Accent 3", class: "bg-accent3", border: true },
    ];

    const typography = [
        { name: "Heading 1", class: "text-h1", text: "Nyantri Sunnah" },
        { name: "Heading 3", class: "text-h3", text: "Kajian Rutin" },
        {
            name: "Subtitle 1",
            class: "text-subtitle-1",
            text: "Belajar Agama Islam dari dasar sesuai tuntunan.",
        },
        { name: "Subtitle 2", class: "text-subtitle-2", text: "Visi & Misi" },
        { name: "Label Item", class: "text-label-item", text: "Kajian Kitab" },
        { name: "Text Menu", class: "text-text-menu", text: "BERANDA" },
    ];

    const gradients = [
        { name: "Gradient Gold", class: "bg-gradient-gold" },
        { name: "Gradient Primary", class: "bg-gradient-primary" },
        { name: "Gradient Overlay", class: "bg-gradient-overlay" },
    ];

    const shadows = [
        { name: "Shadow Nav", class: "shadow-nav" },
        { name: "Shadow Primary", class: "shadow-primary" },
        { name: "Shadow Gold 1", class: "shadow-gold1" },
    ];

    return (
        <div className="min-h-screen bg-gray-50 p-10 font-sans text-gray-800">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold mb-10 border-b pb-4">
                    Al Manshurah Style Guide
                </h1>

                {/* Colors */}
                <section className="mb-16">
                    <h2 className="text-2xl font-semibold mb-6">Colors</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {colors.map((color, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm"
                            >
                                <div
                                    className={`w-24 h-24 rounded-full mb-3 shadow-sm ${color.class
                                        } ${color.border ? "border border-gray-200" : ""}`}
                                ></div>
                                <span className="font-medium">{color.name}</span>
                                <code className="text-xs text-gray-500 mt-1">
                                    .{color.class}
                                </code>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Typography */}
                <section className="mb-16">
                    <h2 className="text-2xl font-semibold mb-6">Typography</h2>
                    <div className="space-y-8 bg-white p-8 rounded-lg shadow-sm">
                        {typography.map((type, index) => (
                            <div key={index} className="border-b last:border-0 pb-6 last:pb-0">
                                <span className="text-xs text-gray-400 uppercase tracking-wider block mb-2">
                                    .{type.class}
                                </span>
                                <div className={type.class}>{type.text}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Gradients */}
                <section className="mb-16">
                    <h2 className="text-2xl font-semibold mb-6">Gradients</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {gradients.map((grad, index) => (
                            <div
                                key={index}
                                className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center"
                            >
                                <div
                                    className={`w-full h-32 rounded-lg mb-3 ${grad.class}`}
                                ></div>
                                <span className="font-medium">{grad.name}</span>
                                <code className="text-xs text-gray-500 mt-1">
                                    .{grad.class}
                                </code>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Shadows */}
                <section className="mb-16">
                    <h2 className="text-2xl font-semibold mb-6">Shadows</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {shadows.map((shadow, index) => (
                            <div
                                key={index}
                                className={`bg-white h-32 rounded-lg flex items-center justify-center ${shadow.class}`}
                            >
                                <span className="font-medium">{shadow.name}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Components */}
                <section className="mb-16">
                    <h2 className="text-2xl font-semibold mb-6">Components</h2>
                    <div className="bg-white p-8 rounded-lg shadow-sm space-y-8">
                        <div>
                            <h3 className="text-lg font-medium mb-4">Buttons (BtnCTA1)</h3>
                            <div className="flex flex-wrap gap-4">
                                <BtnCTA1 href="#" label="Default Button" />
                                <BtnCTA1
                                    href="#"
                                    label="Outlined Button"
                                    isOutlined={true}
                                />
                                <BtnCTA1
                                    href="#"
                                    label="With Custom Icon"
                                    icon={<RiHomeLine size={16} />}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
