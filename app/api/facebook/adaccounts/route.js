//app/api/facebook/adaccounts/route.js
import { NextResponse } from 'next/server';

export async function GET() {
  const accessToken = process.env.META_ACCESS_TOKEN; // From .env.local

  try {
    const res = await fetch(`https://graph.facebook.com/v20.0/me?fields=adaccounts{name,age}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching ad accounts:', error);
    return NextResponse.json({ error: 'Failed to fetch ad accounts' }, { status: 500 });
  }
}
