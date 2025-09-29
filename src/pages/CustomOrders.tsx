import { useState } from 'react';
import { Upload, Check, Clock, Paintbrush, Ruler } from 'lucide-react';
import ScrollAnimation from '../components/common/ScrollAnimation';
import { businessConfig } from '../config/business';

export default function CustomOrders() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        projectDetails: '',
        preferredStyle: '',
        budget: '',
        timeline: ''
    });

    const [kitchenLayout, setKitchenLayout] = useState<File | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Custom order form submitted:', formData);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setKitchenLayout(e.target.files[0]);
        }
    };

    const customWorkImages = [
        '/1.-Cherry-Cabinets-.jpg',
        '/green-kitchen-cabinets-16-64484b02999d7.jpg',
        '/modern-custom-kitchen-remodel-lux-design-builds-img~6ed17ff20d15389a_14-9308-1-58408ce.jpg',
        '/Sand-Inspired-Coastal-Kitchen-4526_181112_Varma-6lFxOopwq2OA4KE6SahDWr-f18b6cf561374248a489fa576ffc7642.jpg',
        '/wood-stained-lkl-material.jpg',
        '/DesignbyNatalieKraiemPhotobyKirstenFrancis-c8c60d48cd3541a9bdb756a933aa3780.jpg'
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Header */}
            <ScrollAnimation direction="up" className="text-center mb-12" immediate={true}>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    Custom Kitchen Cabinets in {businessConfig.address.city}
                </h1>
                <p className="text-xl text-gray-600 mb-2">
                    Serving All of Minnesota with Personalized Cabinet Solutions
                </p>
                <p className="text-lg text-gray-500">
                    Get exactly what you want with our custom cabinet design and manufacturing service
                </p>
            </ScrollAnimation>

            {/* Process Steps */}
            <section className="mb-16">
                <ScrollAnimation direction="up" immediate={true}>
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Custom Process</h2>
                </ScrollAnimation>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <ScrollAnimation direction="up" delay={0.1} immediate={true}>
                        <div className="text-center">
                            <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                1
                            </div>
                            <Ruler className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                            <h3 className="text-lg font-semibold mb-2">Consultation & Measuring</h3>
                            <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation direction="up" delay={0.2} immediate={true}>
                        <div className="text-center">
                            <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                2
                            </div>
                            <Paintbrush className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                            <h3 className="text-lg font-semibold mb-2">Custom Design</h3>
                            <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation direction="up" delay={0.3} immediate={true}>
                        <div className="text-center">
                            <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                3
                            </div>
                            <Clock className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                            <h3 className="text-lg font-semibold mb-2">Manufacturing</h3>
                            <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation direction="up" delay={0.4} immediate={true}>
                        <div className="text-center">
                            <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                4
                            </div>
                            <Check className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                            <h3 className="text-lg font-semibold mb-2">Installation</h3>
                            <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>

            {/* Custom Work Gallery */}
            <section className="mb-16">
                <ScrollAnimation direction="up" immediate={true}>
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Custom Work</h2>
                </ScrollAnimation>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {customWorkImages.map((image, index) => (
                        <ScrollAnimation key={index} direction="up" delay={index * 0.1} immediate={true}>
                            <div className="overflow-hidden rounded-lg shadow-lg">
                                <img
                                    src={image}
                                    alt={`Custom cabinet work ${index + 1}`}
                                    className="w-full h-64 object-cover"
                                />
                            </div>
                        </ScrollAnimation>
                    ))}
                </div>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Custom Order Form */}
                <ScrollAnimation direction="left">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Request Custom Quote</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                    Phone Number *
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    required
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label htmlFor="preferredStyle" className="block text-sm font-medium text-gray-700 mb-1">
                                    Preferred Style
                                </label>
                                <select
                                    id="preferredStyle"
                                    value={formData.preferredStyle}
                                    onChange={(e) => setFormData({ ...formData, preferredStyle: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                >
                                    <option value="">Select a style</option>
                                    <option value="shaker">Shaker</option>
                                    <option value="modern">Modern</option>
                                    <option value="traditional">Traditional</option>
                                    <option value="farmhouse">Farmhouse</option>
                                    <option value="contemporary">Contemporary</option>
                                    <option value="other">Other (please specify in details)</option>
                                </select>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
                                        Budget Range
                                    </label>
                                    <select
                                        id="budget"
                                        value={formData.budget}
                                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                    >
                                        <option value="">Select budget range</option>
                                        <option value="under-10k">Under $10,000</option>
                                        <option value="10k-20k">$10,000 - $20,000</option>
                                        <option value="20k-30k">$20,000 - $30,000</option>
                                        <option value="30k-50k">$30,000 - $50,000</option>
                                        <option value="over-50k">Over $50,000</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-1">
                                        Project Timeline
                                    </label>
                                    <select
                                        id="timeline"
                                        value={formData.timeline}
                                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                    >
                                        <option value="">Select timeline</option>
                                        <option value="asap">As soon as possible</option>
                                        <option value="1-3months">1-3 months</option>
                                        <option value="3-6months">3-6 months</option>
                                        <option value="6months+">6+ months</option>
                                        <option value="flexible">Flexible</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="projectDetails" className="block text-sm font-medium text-gray-700 mb-1">
                                    Project Details *
                                </label>
                                <textarea
                                    id="projectDetails"
                                    required
                                    rows={4}
                                    value={formData.projectDetails}
                                    onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                                    placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore..."
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label htmlFor="kitchenLayout" className="block text-sm font-medium text-gray-700 mb-1">
                                    Upload Kitchen Layout (Optional)
                                </label>
                                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-blue-400 transition-colors">
                                    <div className="space-y-1 text-center">
                                        <Upload className="mx-auto h-12 w-12 text-gray-400" />
                                        <div className="flex text-sm text-gray-600">
                                            <label htmlFor="kitchenLayout" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500">
                                                <span>Upload a file</span>
                                                <input
                                                    id="kitchenLayout"
                                                    name="kitchenLayout"
                                                    type="file"
                                                    accept=".pdf,.jpg,.jpeg,.png,.gif"
                                                    onChange={handleFileChange}
                                                    className="sr-only"
                                                />
                                            </label>
                                            <p className="pl-1">or drag and drop</p>
                                        </div>
                                        <p className="text-xs text-gray-500">PDF, PNG, JPG up to 10MB</p>
                                        {kitchenLayout && (
                                            <p className="text-sm text-green-600 font-medium">
                                                Selected: {kitchenLayout.name}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                            >
                                Request Custom Quote
                            </button>
                        </form>
                    </div>
                </ScrollAnimation>

                {/* Information Sidebar */}
                <ScrollAnimation direction="right">
                    <div className="space-y-8">
                        {/*
                        <div className="bg-green-50 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold text-green-900 mb-4">Get Started Today</h3>
                            <p className="text-green-800 mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                            </p>
                            <div className="space-y-2 text-green-800">
              <div className="font-medium">📞 {businessConfig.contact.phone}</div>
              <div>✉️ {businessConfig.contact.email}</div>
              <div>📍 {businessConfig.address.street}, {businessConfig.address.city}, {businessConfig.address.state}</div>
                            </div>
                        </div>
			  */}
                    </div>
                </ScrollAnimation>
            </div>
        </div>
    );
}
