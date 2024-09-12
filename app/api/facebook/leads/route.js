// app/api/facebook/leads/route.js
import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const adId = searchParams.get('adId');
  const accessToken = process.env.META_ACCESS_TOKEN;

  try {
    const res = await fetch(`https://graph.facebook.com/v20.0/${adId}?fields=leads{id,created_time,field_data}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching leads:', error);
    return NextResponse.json({ error: 'Failed to fetch leads' }, { status: 500 });
  }
}