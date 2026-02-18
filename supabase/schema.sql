-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- PRODUCTS TABLE
create table if not exists public.products (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  slug text not null,
  description text,
  price numeric not null,
  category text not null check (category in ('decoracion_mesa', 'decoracion_pared', 'uso_personal', 'avanzado')),
  subcategory text,
  image_url text[] default '{}',
  production_time_days integer default 7,
  is_featured boolean default false,
  is_active boolean default true,
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  constraint products_slug_key unique (slug)
);

-- TESTIMONIALS TABLE
create table if not exists public.testimonials (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  role text,
  content text not null,
  rating integer default 5,
  image_url text,
  is_featured boolean default false,
  is_active boolean default true,
  created_at timestamptz default now()
);

-- ENABLE ROW LEVEL SECURITY
alter table public.products enable row level security;
alter table public.testimonials enable row level security;

-- POLICIES (PUBLIC READ ACCESS)
create policy "Public products are viewable by everyone"
  on public.products for select
  using ( true );

create policy "Public testimonials are viewable by everyone"
  on public.testimonials for select
  using ( true );

-- POLICIES (OPTIONAL: ADMIN WRITE ACCESS - IF YOU USE SERVICE_ROLE KEY THIS IS NOT STRICTLY NEEDED BUT GOOD PRACTICE)
-- Assuming service role bypasses RLS, explicit insert policies for anon are generally not needed unless we want public submissions.
-- We will migrate data using a server-side route which can use SERVICE_ROLE key or just assume we run this SQL via Dashboard.
