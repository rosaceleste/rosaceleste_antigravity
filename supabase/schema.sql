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

-- LEADS TABLE
create table if not exists public.leads (
  id uuid default uuid_generate_v4() primary key,
  name varchar(255) not null,
  email varchar(255) not null,
  phone varchar(50),
  country varchar(100),
  city varchar(100),
  interest_type varchar(50), -- 'presencial', 'online', 'grupal', 'individual', 'producto'
  message text,
  source varchar(50), -- 'landing', 'productos', 'clases'
  status varchar(50) default 'new', -- 'new', 'contacted', 'converted', 'lost'
  created_at timestamptz default now()
);

-- ENABLE RLS FOR LEADS
alter table public.leads enable row level security;

-- POLICY FOR LEADS (ADMIN ONLY - SERVICE ROLE)
-- Public can only insert
create policy "Public can insert leads"
  on public.leads for insert
  with check ( true );

create policy "Admins can view leads"
  on public.leads for select
  using ( auth.role() = 'service_role' );
