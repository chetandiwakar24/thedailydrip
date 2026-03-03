export async function POST(request) {
    try {
        const body = await request.json();
        const { name, email, message } = body;

        if (!name || !email || !message) {
            return Response.json({ error: 'All fields are required.' }, { status: 400 });
        }

        // Log the message to the server console (extend with email/DB as needed)
        console.log('\n☕ New Contact Message — The Daily Drip');
        console.log('──────────────────────────────────────');
        console.log(`Name:    ${name}`);
        console.log(`Email:   ${email}`);
        console.log(`Message: ${message}`);
        console.log(`Time:    ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}`);
        console.log('──────────────────────────────────────\n');

        return Response.json({ success: true, message: 'Message received!' }, { status: 200 });
    } catch (err) {
        console.error('Contact API error:', err);
        return Response.json({ error: 'Server error.' }, { status: 500 });
    }
}
