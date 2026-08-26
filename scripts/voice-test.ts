import { triggerVoiceCall } from "../src/lib/voice";

const testVoice = async () => {
    console.log("Starting voice call tests...");

    // Testing customer_add
    triggerVoiceCall("customer_add", "01700000000", "Testing customer_add");

    // Testing electrician_assigned
    triggerVoiceCall("electrician_assigned", "01700000000", "Testing electrician_assigned");

    // Testing technician_assigned
    triggerVoiceCall("technician_assigned", "01700000000", "Testing technician_assigned");

    // Testing service_requested
    triggerVoiceCall("service_requested", "01700000000", "Testing service_requested");

    // Testing installation_complete
    triggerVoiceCall("installation_complete", "01700000000", "Testing installation_complete");
    
    // Testing service_complete
    triggerVoiceCall("service_complete", "01700000000", "Testing service_complete");

    // Testing customer_due
    triggerVoiceCall("customer_due", "01700000000", "Testing customer_due");

    // Testing customer_dashboard_disabled
    triggerVoiceCall("customer_dashboard_disabled", "01700000000", "Testing customer_dashboard_disabled");

    // Testing admin_add_virtual_balance
    triggerVoiceCall("admin_add_virtual_balance", "01700000000", "Testing admin_add_virtual_balance");

    console.log("Voice call triggers dispatched.");
}

testVoice().catch(console.error);
