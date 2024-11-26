<template>
    <div>
        <!-- Current route -->
        <div style="position: fixed; top: 10px; left: 10px; font-size: 14px; max-height:500px;overflow:auto;padding: 10px;background: #f8f8f8;border-radius: 4px;font-family: monospace; width: 300px; background: black; border: 2px solid gray;"><pre><b>$route:</b> {{ $route }}</pre></div>

        <!-- Shipment Form -->
        <h1 class="text-3xl font-bold">Shipment Form</h1>

        <form @submit.prevent="saveShipment" class="flex flex-col gap-5 mt-8 pb-10">
            <!-- First Name -->
            <div class="flex flex-col gap-2">
                <label class="text-gray-400/90 text-[17px]" for="firstName">First Name</label>
                <input
                    id="firstName"
                    class="px-2 py-2 bg-green-900 ring-2 ring-gray-500 rounded-lg"
                    v-model="form.firstName"
                    type="text"
                />
            </div>

            <!-- Last Name -->
            <div class="flex flex-col gap-2">
                <label class="text-gray-400/90 text-[17px]" for="lastName">Last Name</label>
                <input
                    id="lastName"
                    class="px-2 py-2 bg-green-900 ring-2 ring-gray-500 rounded-lg"
                    v-model="form.lastName"
                    type="text"
                />
            </div>

            <!-- Address -->
            <div class="flex flex-col gap-2">
                <label class="text-gray-400/90 text-[17px]" for="address">Address</label>
                <input
                    id="address"
                    class="px-2 py-2 bg-green-900 ring-2 ring-gray-500 rounded-lg"
                    v-model="form.address"
                    type="text"
                />
            </div>

            <!-- Street -->
            <div class="flex flex-col gap-2">
                <label class="text-gray-400/90 text-[17px]" for="street">Street</label>
                <input
                    id="street"
                    class="px-2 py-2 bg-green-900 ring-2 ring-gray-500 rounded-lg"
                    v-model="form.street"
                    type="text"
                />
            </div>

            <!-- City -->
            <div class="flex flex-col gap-2">
                <label class="text-gray-400/90 text-[17px]" for="city">City</label>
                <input
                    id="city"
                    class="px-2 py-2 bg-gray-700 ring-2 ring-gray-500 rounded-lg"
                    v-model="form.city"
                    type="text"
                />
            </div>

            <!-- State -->
            <div class="flex flex-col gap-2">
                <label class="text-gray-400/90 text-[17px]" for="state">State</label>
                <input
                    id="state"
                    class="px-2 py-2 bg-gray-700 ring-2 ring-gray-500 rounded-lg"
                    v-model="form.state"
                    type="text"
                />
            </div>

            <!-- Zip Code -->
            <div class="flex flex-col gap-2">
                <label class="text-gray-400/90 text-[17px]" for="zip">Zip Code</label>
                <input
                    id="zip"
                    class="px-2 py-2 bg-gray-700 ring-2 ring-gray-500 rounded-lg"
                    v-model="form.zip"
                    type="text"
                />
            </div>

            <!-- Country -->
            <div class="flex flex-col gap-2">
                <label class="text-gray-400/90 text-[17px]" for="country">Country</label>
                <input
                    id="country"
                    class="px-2 py-2 bg-gray-700 ring-2 ring-gray-500 rounded-lg"
                    v-model="form.country"
                    type="text"
                />
            </div>

            <!-- Phone -->
            <div class="flex flex-col gap-2">
                <label class="text-gray-400/90 text-[17px]" for="phone">Phone</label>
                <input
                    id="phone"
                    class="px-2 py-2 bg-gray-700 ring-2 ring-gray-500 rounded-lg"
                    v-model="form.phone"
                    type="tel"
                />
            </div>

            <!-- Email -->
            <div class="flex flex-col gap-2">
                <label class="text-gray-400/90 text-[17px]" for="email">Email</label>
                <input
                    id="email"
                    class="px-2 py-2 bg-gray-700 ring-2 ring-gray-500 rounded-lg"
                    v-model="form.email"
                    type="email"
                />
            </div>

            <!-- Shipment Weight -->
            <div class="flex flex-col gap-2">
                <label class="text-gray-400/90 text-[17px]" for="shipmentWeight">Shipment Weight</label>
                <input
                    id="shipmentWeight"
                    class="px-2 py-2 bg-gray-700 ring-2 ring-gray-500 rounded-lg"
                    v-model="form.shipmentWeight"
                    type="number"
                />
            </div>

            <!-- Shipment Dimensions -->
            <div class="flex flex-col gap-2">
                <label class="text-gray-400/90 text-[17px]" for="shipmentLength">Length</label>
                <input
                    id="shipmentLength"
                    class="px-2 py-2 bg-gray-700 ring-2 ring-gray-500 rounded-lg"
                    v-model="form.shipmentLength"
                    type="number"
                />
                <label class="text-gray-400/90 text-[17px]" for="shipmentWidth">Width</label>
                <input
                    id="shipmentWidth"
                    class="px-2 py-2 bg-gray-700 ring-2 ring-gray-500 rounded-lg"
                    v-model="form.shipmentWidth"
                    type="number"
                />
                <label class="text-gray-400/90 text-[17px]" for="shipmentHeight">Height</label>
                <input
                    id="shipmentHeight"
                    class="px-2 py-2 bg-gray-700 ring-2 ring-gray-500 rounded-lg"
                    v-model="form.shipmentHeight"
                    type="number"
                />
            </div>

            <!-- Shipment Value -->
            <div class="flex flex-col gap-2">
                <label class="text-gray-400/90 text-[17px]" for="shipmentValue">Shipment Value</label>
                <input
                    id="shipmentValue"
                    class="px-2 py-2 bg-gray-700 ring-2 ring-gray-500 rounded-lg"
                    v-model="form.shipmentValue"
                    type="number"
                />
            </div>

            <!-- Item Description -->
            <div class="flex flex-col gap-2">
                <label class="text-gray-400/90 text-[17px]" for="itemDescriptionText">Item Description</label>
                <textarea
                    id="itemDescriptionText"
                    class="px-2 py-2 bg-gray-700 ring-2 ring-gray-500 rounded-lg"
                    v-model="form.itemDescriptionText"
                ></textarea>
            </div>

            <!-- Receiver Details -->
            <h2 class="text-2xl font-bold mt-5"># Receiver Details</h2>

            <div class="flex flex-col gap-2">
                <label class="text-gray-400/90 text-[17px]" for="receiverFullName">Full Name</label>
                <input
                    id="receiverFullName"
                    class="px-2 py-2 bg-gray-700 ring-2 ring-gray-500 rounded-lg"
                    v-model="form.receiverFullName"
                    type="text"
                />
            </div>

            <div class="flex flex-col gap-2">
                <label class="text-gray-400/90 text-[17px]" for="receiverAddress">Address</label>
                <input
                    id="receiverAddress"
                    class="px-2 py-2 bg-gray-700 ring-2 ring-gray-500 rounded-lg"
                    v-model="form.receiverAddress"
                    type="text"
                />
            </div>

            <div class="flex flex-col gap-2">
                <label class="text-gray-400/90 text-[17px]" for="receiverCity">City</label>
                <input
                    id="receiverCity"
                    class="px-2 py-2 bg-gray-700 ring-2 ring-gray-500 rounded-lg"
                    v-model="form.receiverCity"
                    type="text"
                />
            </div>

            <div class="flex flex-col gap-2">
                <label class="text-gray-400/90 text-[17px]" for="receiverState">State</label>
                <input
                    id="receiverState"
                    class="px-2 py-2 bg-gray-700 ring-2 ring-gray-500 rounded-lg"
                    v-model="form.receiverState"
                    type="text"
                />
            </div>

            <div class="flex flex-col gap-2">
                <label class="text-gray-400/90 text-[17px]" for="receiverZip">Zip Code</label>
                <input
                    id="receiverZip"
                    class="px-2 py-2 bg-gray-700 ring-2 ring-gray-500 rounded-lg"
                    v-model="form.receiverZip"
                    type="text"
                />
            </div>

            <div class="flex flex-col gap-2">
                <label class="text-gray-400/90 text-[17px]" for="receiverCountry">Country</label>
                <input
                    id="receiverCountry"
                    class="px-2 py-2 bg-gray-700 ring-2 ring-gray-500 rounded-lg"
                    v-model="form.receiverCountry"
                    type="text"
                />
            </div>

            <div class="flex flex-col gap-2">
                <label class="text-gray-400/90 text-[17px]" for="receiverPhone">Phone</label>
                <input
                    id="receiverPhone"
                    class="px-2 py-2 bg-gray-700 ring-2 ring-gray-500 rounded-lg"
                    v-model="form.receiverPhone"
                    type="tel"
                />
            </div>

            <div class="flex flex-col gap-2">
                <label class="text-gray-400/90 text-[17px]" for="receiverEmail">Email</label>
                <input
                    id="receiverEmail"
                    class="px-2 py-2 bg-gray-700 ring-2 ring-gray-500 rounded-lg"
                    v-model="form.receiverEmail"
                    type="email"
                />
            </div>

            <!-- Terms Agreement -->
            <div class="flex items-center gap-2">
                <input
                    id="isAgreedToTerms"
                    type="checkbox"
                    class="w-5 h-5"
                    v-model="form.isAgreedToTerms"
                />
                <label class="text-gray-400/90 text-[17px]" for="isAgreedToTerms">I agree to the terms and conditions</label>
            </div>

            <!-- VAT Value -->
            <div class="flex flex-col gap-2">
                <label class="text-gray-400/90 text-[17px]" for="vatValue">VAT Value</label>
                <input
                    id="vatValue"
                    class="px-2 py-2 bg-gray-700 ring-2 ring-gray-500 rounded-lg"
                    v-model="form.vatValue"
                    type="number"
                />
            </div>

            <button
                type="submit"
                class="px-4 py-6 mt-5 bg-green-600 text-white rounded-lg text-2xl hover:bg-green-700 transition hover:active:bg-green-800">

                {{ isLoading ? 'Saving Shipment...' : 'Save Shipment' }}
            </button>
        </form>
    </div>
</template>

<script setup lang="ts">
    const route = useRoute()
    const router = useRouter()
    
    const form = ref({
        firstName: 'Jimmy',
        lastName: 'Kimmel',
        address: 'Hollywood Boulevard',
        street: '1',
        city: '',
        state: '',
        zip: '',
        country: '',
        phone: '',
        email: '',
        shipmentWeight: '',
        shipmentLength: '',
        shipmentWidth: '',
        shipmentHeight: '',
        shipmentValue: '',
        itemDescriptionText: '',
        receiverFullName: '',
        receiverAddress: '',
        receiverCity: '',
        receiverState: '',
        receiverZip: '',
        receiverCountry: '',
        receiverPhone: '',
        receiverEmail: '',
        isAgreedToTerms: false,
        vatValue: 0,
    })

    const isLoading = ref(false)

    const saveShipment = async () => {
        isLoading.value = true

        await new Promise((resolve) => setTimeout(resolve, 1000)) // Fake API

        isLoading.value = false

        /**
         * We need to navigate to the saved shipment (e.g. /123) after saving the shipment.
         * But we don't want to reload the page or reload the components. Only update the URL.
         */

        // navigateTo('/123')
        // router.push({ params: { id: '123' } })
        router.push('/123')
        // router.replace('/123')
        // window.history.pushState({}, '', '/123') // This updates the URL but doesn't update the $route
    }

    // Load existing Shipment and fill the form `/:id`
    if (route.params.id) {
        await new Promise((resolve) => setTimeout(resolve, 2000)) // Fake API

        // Simulate loading data from API
        form.value.firstName = 'Jimmy'
        form.value.lastName = 'Kimmel'
        form.value.address = 'Hollywood Boulevard'
        form.value.street = '1'
    }
</script>
