// app/api/facebook/campaigns/route.js
import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const adAccountId = searchParams.get('adAccountId');
  const accessToken = process.env.META_ACCESS_TOKEN;

  try {
    const res = await fetch(`https://graph.facebook.com/v20.0/${adAccountId}/campaigns?fields=id,name,ads{id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching campaigns:', error);
    return NextResponse.json({ error: 'Failed to fetch campaigns' }, { status: 500 });
  }
}