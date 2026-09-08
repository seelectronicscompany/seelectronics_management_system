--
-- PostgreSQL database dump
--

\restrict sj8P3ENVHJp975oX5gzAMS0ckBmfGgL5fwT0VJe07ZySpIrO0cQUwDQfPNBmtjE

-- Dumped from database version 17.11 (32e7196)
-- Dumped by pg_dump version 18.6 (Ubuntu 18.6-1.pgdg24.04+2)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: __drizzle_migrations; Type: TABLE DATA; Schema: drizzle; Owner: -
--

INSERT INTO drizzle.__drizzle_migrations VALUES (1, '405f7ce2e1d9d6f27d9d5745420256613ea40ca5ebe898ce7d57f3da9a2101fb', 1776450458991);
INSERT INTO drizzle.__drizzle_migrations VALUES (2, '9c671f94643bee700432a001671c94e9a2ae2bf8ccce5edb36bc40d39d31d2c9', 1782782791990);
INSERT INTO drizzle.__drizzle_migrations VALUES (3, '1efe1fc4419b27e46c27267adc25060bd93f8fa596bb581b077fa61585e7b419', 1784978385212);
INSERT INTO drizzle.__drizzle_migrations VALUES (4, '2661fa3677a3797c6bea4ee8d5b02becb5289247f1748075c465f05ea487541b', 1787062112746);
INSERT INTO drizzle.__drizzle_migrations VALUES (5, '582ab4b95161f38b80511402446e34c7472afe88b58546474102acfd493a534f', 1787062590065);
INSERT INTO drizzle.__drizzle_migrations VALUES (6, '640e01d49a8ff692023b6e615bf33fb2b9832fdcf39c0a799c4657ea798e9d7e', 1788550282601);
INSERT INTO drizzle.__drizzle_migrations VALUES (7, 'f636eba5384e0533d44586711b5f6d4e03c9dce05f48338ee269fdc653131c87', 1788557425780);


--
-- Data for Name: adminNotifications; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public."adminNotifications" VALUES ('5a5f2a31-f4f3-4167-b018-929bcb67501c', 'complaint', 'New complaint (SE6A8F9QWR) filed by Shabuddin Mahamud against Shabuddin Mahamud.', '/complaints', true, '2026-04-17 20:12:40.011368+00');
INSERT INTO public."adminNotifications" VALUES ('4b73bacc-75e0-44af-89d0-464b266db384', 'system', 'New referral payout request of ৳500 from Shabuddin Mahamud (1045326210181059)', '/referral-payments', true, '2026-04-17 19:55:28.338545+00');
INSERT INTO public."adminNotifications" VALUES ('0a9cdc6b-fa99-4485-ba59-cb5e7a1efab8', 'payment_request', 'Shabuddin Mahamud requested ৳1100 payment.', '/payments', true, '2026-04-17 19:41:40.560127+00');
INSERT INTO public."adminNotifications" VALUES ('ee07c11c-f58c-47f8-92d1-ba6ad29d220b', 'payment_request', 'HALIM MIA requested ৳60 payment.', '/payments', true, '2026-05-16 09:57:23.770786+00');
INSERT INTO public."adminNotifications" VALUES ('56254983-086f-4696-b44c-f365c945b4a3', 'payment_request', 'Shabuddin Mahamud requested ৳150 payment.', '/payments', true, '2026-05-02 14:50:35.716515+00');
INSERT INTO public."adminNotifications" VALUES ('31516ed7-080e-43ed-8966-ca97194a5d0b', 'payment_request', 'HALIM MIA requested ৳20 payment.', '/payments', true, '2026-05-02 14:21:48.954771+00');
INSERT INTO public."adminNotifications" VALUES ('f1c20b50-20f4-4860-a892-ef331f373449', 'payment_request', 'Shabuddin Mahamud requested ৳100 payment.', '/payments', true, '2026-06-18 15:54:01.453856+00');
INSERT INTO public."adminNotifications" VALUES ('c0928fac-ed86-4fe4-ab69-ddc62c26d7e5', 'payment_request', 'Shabuddin Mahamud requested ৳200 payment.', '/payments', false, '2026-06-28 18:57:43.714021+00');
INSERT INTO public."adminNotifications" VALUES ('2b0ed06a-0f4e-466c-9fbf-7d7879992f7a', 'payment_request', 'Shabuddin Mahamud requested ৳300 payment.', '/payments', false, '2026-07-05 20:46:21.554213+00');
INSERT INTO public."adminNotifications" VALUES ('1a27e9de-bf85-4102-945c-0ea81bdcf012', 'payment_request', 'Shabuddin Mahamud requested ৳100 payment.', '/payments', false, '2026-07-05 21:05:41.958941+00');
INSERT INTO public."adminNotifications" VALUES ('09275d88-e488-43c1-be8e-329f2d703611', 'payment_request', 'Shabuddin Mahamud requested ৳650 payment.', '/payments', false, '2026-07-13 02:07:36.497384+00');
INSERT INTO public."adminNotifications" VALUES ('0e2529ab-04e5-4c4a-a42a-a32191651688', 'complaint', 'New complaint (SE8GOXP7OT) filed by Shabuddin Mahamud against Shabuddin Mahamud.', '/complaints', false, '2026-07-18 10:20:22.965483+00');
INSERT INTO public."adminNotifications" VALUES ('5f83861f-a447-47a5-8d25-2d13dc54b289', 'system', 'New referral payout request of ৳1000 from Shabuddin Mahamud (1045326210181059)', '/referral-payments', false, '2026-07-18 21:10:27.940906+00');
INSERT INTO public."adminNotifications" VALUES ('fd1994e6-612d-4722-b0cf-3bb422ed439e', 'system', 'New referral payout request of ৳100 from Shabuddin Mahamud (1045326210181059)', '/referral-payments', false, '2026-07-18 21:30:09.802315+00');
INSERT INTO public."adminNotifications" VALUES ('8bf2ba84-90b6-4d9d-b6cf-32ec90d71c8c', 'payment_request', 'Talha Khan Electrician requested ৳500 payment.', '/payments', false, '2026-07-19 13:30:56.391513+00');
INSERT INTO public."adminNotifications" VALUES ('e8dd3ee0-62c8-4c8e-aeef-d704b0a8214c', 'payment_request', 'Talha Khan Electrician requested ৳598 payment.', '/payments', false, '2026-07-20 05:39:40.387095+00');
INSERT INTO public."adminNotifications" VALUES ('138249a9-5550-4f7b-a4a4-5ee935e4dc7c', 'payment_request', 'Talha Khan Electrician requested ৳1000 payment.', '/payments', false, '2026-07-20 06:09:28.649326+00');
INSERT INTO public."adminNotifications" VALUES ('d32238be-baf3-43a5-b4eb-e394c67318ff', 'payment_request', 'Talha Khan Electrician requested ৳600 payment.', '/payments', false, '2026-07-20 15:54:51.879668+00');
INSERT INTO public."adminNotifications" VALUES ('55a0cf96-5634-4294-84de-55e981a32b5f', 'payment_request', 'Talha Khan Electrician requested ৳300 payment.', '/payments', false, '2026-07-20 16:25:04.592569+00');
INSERT INTO public."adminNotifications" VALUES ('b16f4f69-fb48-465a-89d4-dc77a6bde557', 'payment_request', 'Anuar Ahmed requested ৳300 payment.', '/payments', false, '2026-07-29 05:15:15.420091+00');
INSERT INTO public."adminNotifications" VALUES ('79f54cd1-167f-402e-8101-5672f9c9b328', 'payment_request', 'Anuar Ahmed requested ৳150 payment.', '/payments', false, '2026-08-11 21:09:12.815001+00');
INSERT INTO public."adminNotifications" VALUES ('6a053ab2-252b-4879-b69f-afb51c47f54c', 'payment_request', 'Shabuddin Mahamud requested ৳400 payment.', '/payments', false, '2026-08-11 21:34:45.111383+00');
INSERT INTO public."adminNotifications" VALUES ('02adf91d-725c-4051-b7de-881d149b171b', 'payment_request', 'Shabuddin Mahamud requested ৳1000 payment.', '/payments', false, '2026-08-11 21:44:13.850883+00');
INSERT INTO public."adminNotifications" VALUES ('ac300d3f-63ad-4e1f-9e29-4c35c54d3f38', 'complaint', 'New complaint (SEIW3TGD0A) filed by Shabuddin Mahamud against Talha Khan Electrician.', '/complaints', false, '2026-08-16 19:43:01.2927+00');
INSERT INTO public."adminNotifications" VALUES ('d0adfa81-fc26-4913-8efc-e2880a8b11ed', 'complaint', 'New complaint (SEOX1AMCCY) filed by Shabuddin Mahamud against Anuar Ahmed.', '/complaints', false, '2026-08-17 00:02:10.333657+00');
INSERT INTO public."adminNotifications" VALUES ('c9d2e7c8-9cc5-48e3-9d0c-eda5f84e7144', 'payment_request', 'Shabuddin Mahamud requested ৳200 payment.', '/payments', false, '2026-09-07 17:58:39.087118+00');
INSERT INTO public."adminNotifications" VALUES ('2f7107df-1d85-46f4-a64b-b19e1d4fa40f', 'payment_request', 'Shabuddin Mahamud requested ৳300 payment.', '/payments', false, '2026-09-08 05:34:46.034764+00');


--
-- Data for Name: admins; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.admins VALUES ('b5ba9d9e-49f1-4add-87ce-789acbfd059d', 'seelectronics', '$2b$10$jlSn1jAPD3KcDAwQcnDP4.x470WKAxMrfcRY2gx4ZafqL8UhXDjf6', '2026-04-17 18:36:40.858412+00', '2026-04-17 18:36:40.858412+00');


--
-- Data for Name: agreements; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.agreements VALUES ('1e3ab345-f2fb-45e3-8453-d0772cf34c30', 'application_declaration', 'Service Application Declaration', 'আমি এই মর্মে ঘোষণা করিতেছি যে, আমি SE ELECTRONICS কোম্পানির সকল নির্দেশনা মানিয়া চলিব এবং আমার উপরোক্ত তথ্যবলি নির্ভুল ও সত্য। আমি জ্ঞানতঃ কোনো তথ্য গোপন করি নাই ৷ যদি আমি ভবিষ্যতে আমার বিরুদ্ধে ভুল তথ্য দাখিল কিংবা প্রধান সম্পর্কিত কোনো ধরনের অভিযোগ পাওয়া যায়, তাহলে এস ই বিডি কতৃকপক্ষ আমার বিরুদ্ধে যথাযথ ব্যবস্হা গ্রহন করিতে পারিবে এবং এতে আমার কোনো অপত্তি থাকবেনা। আমি কোনো অপত্তি করিলে সর্বস্হর আদালতে তাহ্য অগ্যাহ্য বলিয়া গণ্য হইবে। আমার বর্তমান ঠিকানা পরিবর্তন হলে পরিবর্তীত নতুন ঠিকানা পরবর্তী ০৩ দিনের মধ্যে লিখিতভাবে এস ই বিডির প্রশাসনিক বিভাগে জানাতে বাধ্য থাকবো৷', '1.0', true, '2026-08-16 19:23:43.083269+00', '2026-08-16 19:23:43.083269+00');


--
-- Data for Name: applications; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.applications VALUES ('468df77d-df55-464a-adf1-b48b60c23a95', 'SEJ3MUPD5W', 'SECP1SAA6C', 'approved', 'subscription_application', '', '2026-04-17 20:18:28.999361+00', '2026-04-17 20:33:00.274+00');
INSERT INTO public.applications VALUES ('795ad300-ac04-49b7-bba3-d60a5f0f751a', 'SETXCDEZW6', 'SEN5Y2N6WT', 'approved', 'staff_application', '', '2026-05-02 15:41:47.16845+00', '2026-05-02 16:46:11.383+00');
INSERT INTO public.applications VALUES ('bfe7b95f-7745-4dea-b0ee-2d1edf422ca7', 'SEB1G1LAVA', 'SEMQS5YF41', 'approved', 'staff_application', '', '2026-05-04 11:41:17.080385+00', '2026-05-04 17:15:55.653+00');
INSERT INTO public.applications VALUES ('3c94c95d-c833-434a-9c86-f30af4ea2625', 'SERJC1LZWY', 'SEBUFWV5BI', 'processing', 'staff_application', '', '2026-08-10 16:12:56.094187+00', '2026-09-03 18:23:41.276+00');


--
-- Data for Name: authTokens; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public."authTokens" VALUES ('a0148bdd-0651-4f43-9952-19de80f4b4e8', '66373113207fc000c5ebf43096b205d2', '{"id":"66262963","type":"invoice"}', '2026-08-18 08:15:18.19+00', '2026-08-17 08:15:18.302729+00', '2026-08-17 08:15:18.302729+00');
INSERT INTO public."authTokens" VALUES ('8aa2de72-1a67-4592-a09f-e2897e3d5bef', '343f253110a146b343a06f71be768108', '{"id":"46181405","type":"invoice"}', '2026-08-21 08:51:06.934+00', '2026-08-20 08:51:07.043731+00', '2026-08-20 08:51:07.043731+00');
INSERT INTO public."authTokens" VALUES ('4386077a-e587-413b-aa28-ec4b34feced5', '7e5b67b897773ffe0ba52d493bd03785', '{"id":"19668922","type":"invoice"}', '2026-08-24 08:57:14.601+00', '2026-08-23 08:57:14.719677+00', '2026-08-23 08:57:14.719677+00');
INSERT INTO public."authTokens" VALUES ('4132eb9e-c5bf-471c-ad54-edd448f044b4', '2a997d0847f1932e904c74f69284849a', '{"id":"44093207","type":"invoice"}', '2026-08-26 21:33:45.991+00', '2026-08-25 21:33:46.110849+00', '2026-08-25 21:33:46.110849+00');
INSERT INTO public."authTokens" VALUES ('721d541a-6806-4f57-9415-436a4b6aa77c', 'a71a6d675ec7985889916338e94b8133', '{"id":"69924308","type":"invoice"}', '2026-08-26 22:12:18.513+00', '2026-08-25 22:12:18.623898+00', '2026-08-25 22:12:18.623898+00');
INSERT INTO public."authTokens" VALUES ('bf073047-e3e3-4ea4-a02b-c7c680e9601f', '1c05c972e0713662817a9c90eed87d2c', '{"id":"38293425","type":"invoice"}', '2026-08-27 07:11:55.421+00', '2026-08-26 07:11:55.53463+00', '2026-08-26 07:11:55.53463+00');
INSERT INTO public."authTokens" VALUES ('80cad9f3-6671-4b4b-9a48-69c8146a32c5', '3d16c0ec2c7ca6dbdb0fd3df21f6ec12', '{"id":"11824997","type":"invoice"}', '2026-08-29 13:51:02.797+00', '2026-08-28 13:51:02.905311+00', '2026-08-28 13:51:02.905311+00');
INSERT INTO public."authTokens" VALUES ('6d936fa9-ad17-4819-865a-0759d23e4dfe', '94341377e22aa388d322117ea806aee2', '{"id":"38293425","type":"invoice"}', '2026-08-29 19:13:14.475+00', '2026-08-28 19:13:14.585028+00', '2026-08-28 19:13:14.585028+00');
INSERT INTO public."authTokens" VALUES ('145e9b42-eba3-493e-832e-3548d9af4b3e', 'f02c50272a32f2de1b7467f04528664f', '{"id":"91049571","type":"invoice"}', '2026-08-31 09:59:30.743+00', '2026-08-30 09:59:30.854867+00', '2026-08-30 09:59:30.854867+00');
INSERT INTO public."authTokens" VALUES ('125bf232-b55e-45e6-befc-3c06ce8e5c4e', '190375a825f5149084ca4318b495261f', '{"id":"93034130","type":"invoice"}', '2026-08-31 17:26:20.892+00', '2026-08-30 17:26:21.003285+00', '2026-08-30 17:26:21.003285+00');
INSERT INTO public."authTokens" VALUES ('72bef2a6-f43b-4f14-bcdc-81b5d550936c', 'cb9706ef042ff85b98e80d226fa1c038', '{"id":"11824997","type":"invoice"}', '2026-09-01 18:07:02.82+00', '2026-08-31 18:07:02.933162+00', '2026-08-31 18:07:02.933162+00');
INSERT INTO public."authTokens" VALUES ('1649f62e-43e0-4fff-9769-fc98a14a0b88', '6f6e318a7d1a84b10b944c6d500ba271', '{"id":"38293425","type":"invoice"}', '2026-09-02 06:27:35.019+00', '2026-09-01 06:27:35.133181+00', '2026-09-01 06:27:35.133181+00');
INSERT INTO public."authTokens" VALUES ('7ac39cb4-86ce-4926-b337-ed6e0b16e675', 'bb192eae78d16fe038a4df50314c77bd', '{"id":"44069334","type":"invoice"}', '2026-09-02 06:28:55.97+00', '2026-09-01 06:28:56.078098+00', '2026-09-01 06:28:56.078098+00');
INSERT INTO public."authTokens" VALUES ('fe3209ff-aab8-44b4-82da-cc802da5f423', '9b2891bb633c1dffae5ff8c3366e8f9f', '{"id":"45104363","type":"invoice"}', '2026-09-02 09:01:36.148+00', '2026-09-01 09:01:36.265652+00', '2026-09-01 09:01:36.265652+00');
INSERT INTO public."authTokens" VALUES ('08eb7904-f04c-4118-9340-53e108a5aac6', '71b93582c2b8592bf519b6ee81408ca9', '{"type":"id-card","id":"SEQQTONWQD","issuedAt":"2026-09-03T18:11:39.054Z"}', '2026-09-04 18:11:39.054+00', '2026-09-03 18:11:39.627765+00', '2026-09-03 18:11:39.627765+00');
INSERT INTO public."authTokens" VALUES ('c829f68e-9a5a-4b8f-96d7-e7ed280f9249', '596c3e794db2e4d2809059d4c69bdf26', '{"id":"38293425","type":"invoice"}', '2026-09-06 08:29:18.581+00', '2026-09-05 08:29:18.701102+00', '2026-09-05 08:29:18.701102+00');
INSERT INTO public."authTokens" VALUES ('38471edb-7787-4080-9978-bcc1f20c318d', '2c7bf0e8460c6ae3d88e7e9e2e7af910', '{"id":"06407261","type":"invoice"}', '2026-09-07 16:46:32.24+00', '2026-09-06 16:46:32.347442+00', '2026-09-06 16:46:32.347442+00');
INSERT INTO public."authTokens" VALUES ('2bfe7b65-4b8e-419b-b936-a83c8848450c', 'f11b829bbac237dd0028695e0ac6a28c', '{"id":"66262963","type":"invoice"}', '2026-08-18 08:23:44.558+00', '2026-08-17 08:23:44.677652+00', '2026-08-17 08:23:44.677652+00');


--
-- Data for Name: banners; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.banners VALUES ('fbe43983-5f45-4264-a9c4-7a18b3953a0e', 'banners/1788551996021-banner1.jpg', false, true, '2026-09-04 19:59:57.797361+00', '2026-09-05 20:45:00.285+00');
INSERT INTO public.banners VALUES ('6850da82-9084-433c-a290-401c0384af42', 'banners/1788552007179-banner2.jpg', false, true, '2026-09-04 20:00:08.875399+00', '2026-09-05 20:45:02.492+00');
INSERT INTO public.banners VALUES ('8db8629c-432c-483a-90b5-f0b9b0b4d195', 'banners/1788767576427-1222dd.png', true, false, '2026-09-07 07:52:57.717199+00', '2026-09-07 07:53:02.294+00');
INSERT INTO public.banners VALUES ('82a3b252-9de3-4ebe-bff4-f6d362f9e697', 'banners/1788767547067-112ee.png', true, true, '2026-09-07 07:52:28.925623+00', '2026-09-07 08:09:57.598+00');
INSERT INTO public.banners VALUES ('3118bfbd-de86-489d-9869-0611913921d9', 'banners/1788552042965-banner3.jpg', false, true, '2026-09-04 20:00:43.981215+00', '2026-09-07 08:34:44.703+00');
INSERT INTO public.banners VALUES ('9b44b852-5ceb-4beb-88c9-6e8703b2cb59', 'banners/1788767563043-1333ggg.png', true, false, '2026-09-07 07:52:44.380502+00', '2026-09-07 08:34:54.991+00');


--
-- Data for Name: customers; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.customers VALUES ('e72c0c0a-7964-4ee7-88d2-c0dcb8d4e772', 'SERBL8II5B', 'MD MASUD RANA', '01627562997', 'SHAMIMABAD MOJUMDAR PARA SYLHET', '14475817', true, false, NULL, 'pending', NULL, '2880754564502467', 0.00, '2026-04-21 09:20:12.594012+00', '2026-05-03 17:47:32.519+00', false, NULL);
INSERT INTO public.customers VALUES ('fd286313-6d37-435b-82f3-2d72c51cf187', 'SEHBGMI4B4', 'MD JOSHIM ', '01710972946', 'Sherpur  chargers  brahmanbaria ', '58434422', true, false, NULL, 'pending', NULL, NULL, 0.00, '2026-04-25 13:05:26.473497+00', '2026-05-06 16:52:24.112+00', false, NULL);
INSERT INTO public.customers VALUES ('d0db6276-06b1-439f-9191-354eccb5f297', 'SE16HPO2NM', 'Md saiful islam ', '01912357286', 'badaghat tahirpur Sunamganj', '17356236', true, false, NULL, 'pending', NULL, NULL, 0.00, '2026-06-03 14:10:12.314899+00', '2026-09-05 07:46:12.661+00', true, '2026-09-05 07:46:12.66+00');
INSERT INTO public.customers VALUES ('ee66a9d2-4e82-481e-ac87-0d58dfe915e5', 'SEWCFAWBYM', 'Shabuddin Mahamud', '01310673600', 'Badambagicha Rd No. 4 Sylhet ', '64438577', true, false, '1045326210181059', 'approved', '2027-08-22 18:22:15.781+00', NULL, 1010.00, '2026-04-17 19:13:37.009073+00', '2026-09-05 15:10:51.2+00', false, NULL);
INSERT INTO public.customers VALUES ('d77398e6-117f-4806-9693-1b907b6ad812', 'SE3TLRL5MG', 'jamiatul khair al islamiya madrasah.77000 ', '01955476395', 'Pir''s Bazar Chowdhury Para Boteswar Sylhet', '22874195', true, false, NULL, 'pending', NULL, NULL, 0.00, '2026-05-16 07:15:43.424467+00', '2026-05-18 09:44:26.91+00', false, NULL);
INSERT INTO public.customers VALUES ('8650b7d0-1c3e-4146-bca9-0d348846cf16', 'SE5850EG4Y', 'Majida Chowdhury', '01710932413', 'Jalalabad 37. House No. 37/2 Mannan Villa Sylhet', '84737577', true, false, NULL, 'pending', NULL, NULL, 0.00, '2026-07-21 06:53:39.052012+00', '2026-09-05 15:12:21.415+00', false, NULL);
INSERT INTO public.customers VALUES ('b05f455f-6345-4df4-a540-a7de3488ad7b', 'SEXS1BE34B', 'MD RAHAT ', '01644720694', 'PIRMOHOLLA  OIKKOTAN SYLHER', '66654796', true, false, NULL, 'pending', NULL, NULL, 0.00, '2026-05-25 17:08:27.256093+00', '2026-05-26 09:44:28.965+00', false, NULL);
INSERT INTO public.customers VALUES ('870b52cf-876a-4249-aaae-f66d63bcf34f', 'SE6EYFREV4', 'Jagannathpur Pharmacy', '01601627581', 'Jagannathpur Vishwanath sylhet', '17905967', true, false, NULL, 'pending', NULL, NULL, 0.00, '2026-05-30 11:09:02.904131+00', '2026-05-30 11:09:02.904131+00', false, NULL);
INSERT INTO public.customers VALUES ('73574611-39e7-4258-8a6b-3ce43e09a0cd', 'SEJFNPD38M', 'MD SHIRAJUL ISLAM', '01712452755', 'JAWA BAZER SYLHET', '60758646', true, false, NULL, 'pending', NULL, NULL, 0.00, '2026-06-17 15:27:56.652264+00', '2026-06-19 19:06:19.53+00', false, NULL);
INSERT INTO public.customers VALUES ('fecdf8af-cca6-487c-b026-1e574458430a', 'SE3FCX0GMI', 'Amir Mia', '01763620777', 'আখালিয়া নতুন বাজার  দুষ্কি মসজিদের পাশে', '50581514', true, false, NULL, 'pending', NULL, NULL, 0.00, '2026-08-03 11:36:36.300617+00', '2026-08-05 08:14:17.967+00', false, NULL);
INSERT INTO public.customers VALUES ('916c0231-c150-4b20-adff-7a284aedcb57', 'SEPX7L8D7H', 'Ruhul Amin', '01616091393', 'মির্জা হাউজ ৩৪৭/এ-১২ আখড়া রোড উত্তর বাগবাড়ি সিলেট', '12657873', true, false, NULL, 'pending', NULL, NULL, 0.00, '2026-06-08 13:13:21.835137+00', '2026-06-10 08:24:20.885+00', false, NULL);
INSERT INTO public.customers VALUES ('273f08c8-31e5-4b98-9121-8b79cb499031', 'SEP728Z15J', 'MD SOJIB AHMED ', '01959983858', 'Badaghat Taherpur Shonamgonj', '66144181', true, false, '3913744268896516', 'approved', '2027-07-16 14:34:34.356+00', NULL, 1200.00, '2026-06-30 16:18:17.803608+00', '2026-09-06 12:20:57.051+00', true, '2026-09-06 12:20:57.051+00');
INSERT INTO public.customers VALUES ('80f2f779-09c9-486f-82b2-4d911f7dc557', 'SEG5QGTK7I', 'Ripa Mahamud', '01322247774', 'Lahattar pol boro koborrosthan Chittagong ', '33555695', true, false, NULL, 'pending', NULL, '1045326210181059', 0.00, '2026-04-17 19:19:13.914255+00', '2026-04-17 19:19:13.914255+00', false, NULL);
INSERT INTO public.customers VALUES ('ddaa5159-4a4a-4706-a00a-fb7f7a4208ee', 'SEVCHY8E8C', 'Md nayem', '01891899338', 'Badambagicha Rd No. 4', '06407261', true, false, NULL, 'pending', NULL, NULL, 0.00, '2026-09-06 16:46:31.234211+00', '2026-09-06 16:46:31.234211+00', false, NULL);
INSERT INTO public.customers VALUES ('a6dac374-8ab2-4a67-9003-39f8b5a1c1b8', 'SEP8BEVJJJ', 'MD SHIEKH RAFI', '01851344473', 'Agroni 96 Londoni Road Sylhit', '84933137', true, false, NULL, 'pending', NULL, NULL, 0.00, '2026-04-18 17:24:39.616838+00', '2026-04-22 17:39:34.825+00', false, NULL);
INSERT INTO public.customers VALUES ('7471867f-9a1c-4c25-974b-ed5448c0b2a4', 'SEZE66FDN4', 'ARMAN REFRIGAR  (BAT NOT MY)', '01752288447', 'YEASIN PLAZA KODOM TOLI SYLHET', '23069166', true, false, NULL, 'pending', NULL, NULL, 0.00, '2026-04-18 11:51:12.878532+00', '2026-04-18 12:02:44.596+00', false, NULL);
INSERT INTO public.customers VALUES ('aa5dc077-2686-4bd5-bf2e-97f0664af9e5', 'SEXHB56LCA', 'Maruf Ahmed ', '01718712492', 'Jollar par sylhet', '02756632', true, false, NULL, 'pending', NULL, NULL, 0.00, '2026-06-14 07:27:20.821356+00', '2026-06-23 08:00:58.914+00', false, NULL);
INSERT INTO public.customers VALUES ('f050a950-c5d4-4c73-8e1c-27d88a8b694e', 'SE5X8714PE', 'MD JONAYED', '01751559105', 'Uposhohor E block,  road 6, basha no: 197', '74725964', true, false, NULL, 'pending', NULL, NULL, 0.00, '2026-06-25 16:14:18.052349+00', '2026-06-25 16:14:18.052349+00', false, NULL);
INSERT INTO public.customers VALUES ('967bcd70-0b7a-40ec-b00a-0b0359372df9', 'SEBLZ5CO6M', 'MD SHOMON MIYA', '01708959429', 'KOLWRA HAZI PUR SYLHET', '38682103', true, false, NULL, 'pending', NULL, NULL, 0.00, '2026-04-21 11:21:25.087746+00', '2026-04-21 11:21:25.087746+00', false, NULL);
INSERT INTO public.customers VALUES ('88d429bc-360d-4d19-b3d4-1d0a8809c343', 'SEC96ZEINO', 'ATIKUR ROHOMAN', '01310673602', 'Badambagicha Rd No. 2 Sylhet ', '49162389', true, false, '9140231752952961', 'approved', '2027-07-07 15:44:11.134+00', '1045326210181059', 0.00, '2026-07-02 19:21:15.471754+00', '2026-08-28 05:15:09.566+00', false, NULL);
INSERT INTO public.customers VALUES ('d8f0bc4c-21ff-41f8-9afe-078c706dfc49', 'SEYSZ0ELKG', 'মো বিপ্লব তালুকদার', '01732599441', 'শামীমাবাদ,মজুমদারপাড়া ৩রোড', '80577743', true, false, '2880754564502467', 'approved', '2027-04-21 09:20:15.788+00', NULL, 1162.00, '2026-04-18 07:17:28.631846+00', '2026-08-28 05:15:09.795+00', false, NULL);
INSERT INTO public.customers VALUES ('aa342c43-49e1-4e1c-b343-3c35862d9ed0', 'SEKBDPLPKM', 'JAKARIYA AHMED EMON', '01725111363', 'Darussalam Moshjid boro Bazaar Sylhet', '56592558', true, false, NULL, 'pending', NULL, NULL, 0.00, '2026-05-23 15:26:16.799687+00', '2026-07-08 06:41:04.985+00', false, NULL);
INSERT INTO public.customers VALUES ('8f3fa2c1-7800-4ec4-82e3-4685a1659b9b', 'SEOYW3C1SY', 'Shanjida Naj', '01950737386', 'Khadimpara , road - 03 Shahporan', '81203990', true, false, NULL, 'pending', NULL, NULL, 0.00, '2026-06-28 18:46:09.242025+00', '2026-07-11 14:49:31.211+00', false, NULL);
INSERT INTO public.customers VALUES ('df9c65e7-4eff-4490-b37b-ad583362f95b', 'SERY4IEAOT', 'MD AMINUR ROHOMAN', '01716563822', 'শামীমাবাদ,মজুমদারপাড়া ৩ রোড সিলেট', '21745886', true, false, NULL, 'pending', NULL, '2880754564502467', 0.00, '2026-04-18 17:35:32.778008+00', '2026-04-24 10:46:21.1+00', false, NULL);
INSERT INTO public.customers VALUES ('786c1fad-3e30-492a-a92a-6c7ff207de43', 'SED31QHDIM', 'MD ABDUL MOJID', '01716465658', 'DAROSSALAM  MADRASHA ROD KHASTOBIR', '14878771', true, false, NULL, 'pending', NULL, NULL, 0.00, '2026-04-24 11:25:22.56214+00', '2026-04-24 11:26:26.951+00', false, NULL);
INSERT INTO public.customers VALUES ('c4b96841-ee39-45ae-aa6c-6aabc2d81173', 'SENPBR9M2A', 'MD HADI', '01717020773', 'PIRMOHOLLA MOSHJID GOLLI 148/38 MAHAMUD VILA', '37934809', true, false, NULL, 'pending', NULL, NULL, 0.00, '2026-04-23 11:58:24.374652+00', '2026-04-27 13:59:22.055+00', false, NULL);
INSERT INTO public.customers VALUES ('9e69dfb2-e7f4-49ec-a31c-651b2bdbbd13', 'SE34VSHIB2', 'MD ABDUL MOTIN ', '01716387242', 'SHAMIMABAD MOHILA COL SYLHET ', '83977123', true, false, NULL, 'pending', NULL, NULL, 0.00, '2026-04-21 12:15:48.962338+00', '2026-04-27 14:00:06.585+00', false, NULL);
INSERT INTO public.customers VALUES ('50550e7e-5f57-4d51-985d-91aaf855d4eb', 'SE82OFPGZP', 'MD ROKIV ', '01317967827', 'SOIUD MOGNI SYLHET', '09834499', true, false, NULL, 'pending', NULL, NULL, 0.00, '2026-04-21 15:17:51.559441+00', '2026-04-28 18:22:19.667+00', false, NULL);
INSERT INTO public.customers VALUES ('769bc867-e343-4c57-93cb-57c3a2d274bc', 'SEH73UD7W2', 'Md Yakub ali', '01311816747', 'Mymensingh bhaluka', '24997384', true, false, NULL, 'pending', NULL, '1045326210181059', 0.00, '2026-07-13 13:55:43.09304+00', '2026-07-13 13:56:01.983+00', false, NULL);
INSERT INTO public.customers VALUES ('9159f079-953c-402d-89c2-88797087e927', 'SEKTFSOQ0D', 'MD FAHAD', '01334409044', 'KHADIM NOGAR DASH PARA', '28935234', true, false, NULL, 'pending', NULL, NULL, 0.00, '2026-04-28 07:04:03.424702+00', '2026-05-02 13:52:28.262+00', false, NULL);
INSERT INTO public.customers VALUES ('ae4db13c-17db-49fe-bbc0-ac5626584bed', 'SERVQ8K5V5', 'MD NURALAM', '01717543322', 'LONDONI ROAD SHOBID BAZER SYLHET', '41131855', true, false, NULL, 'pending', NULL, NULL, 0.00, '2026-04-27 13:36:24.666078+00', '2026-05-02 13:53:11.298+00', false, NULL);
INSERT INTO public.customers VALUES ('a33a54c1-04cd-462b-b110-7b6888cc6fb3', 'SETBR5KC3P', 'MD MAMUN BAI ', '01911199796', 'Block E, Road 6, Spring Tower,  Uposhahor, Sylhet', '65528838', true, false, NULL, 'pending', NULL, NULL, 0.00, '2026-05-02 09:21:07.697185+00', '2026-05-03 17:44:18.127+00', false, NULL);
INSERT INTO public.customers VALUES ('005e762b-4228-477d-9587-a56e1761e7ba', 'SEA1AKR40C', 'FATIMA INTR', '01713822845', '1no rob menshen vip road jito mia point sylhet', '14016761', true, false, NULL, 'pending', NULL, NULL, 0.00, '2026-08-09 12:54:53.011329+00', '2026-08-14 12:03:21.667+00', false, NULL);
INSERT INTO public.customers VALUES ('21e4afa4-eea1-42cb-8f41-1da7c2cb9f7e', 'SE4V7QF15D', 'Lovely dev roy', '01779-878383', '14/1A Meghna, Dariapara Sylhet', '76511164', true, false, NULL, 'pending', NULL, NULL, 0.00, '2026-07-14 07:28:18.937159+00', '2026-07-14 07:28:18.937159+00', false, NULL);
INSERT INTO public.customers VALUES ('d69e5a1b-3027-4cbb-b10f-8f1e53ca8cdc', 'SEXM6JA1VL', 'MD. RAKIB HUSSEN', '01304761002', 'Shobid bazar  Sylhet ', '63015932', true, false, NULL, 'pending', NULL, NULL, 0.00, '2026-08-08 09:01:36.866752+00', '2026-08-17 09:50:39.072+00', false, NULL);
INSERT INTO public.customers VALUES ('f33a7ae5-1b9d-4e8e-880d-02c5f6d37454', 'SEECX49SUT', 'MD AHILL MAHAMUD', '01322247774', 'Badambagicha Rd No. 4', '04667950', true, false, NULL, 'pending', NULL, NULL, 0.00, '2026-07-22 16:17:01.026051+00', '2026-07-22 16:17:42.652+00', false, NULL);
INSERT INTO public.customers VALUES ('1c324704-ed27-46a2-9b22-a7ecc5df0e7d', 'SEHIGKRDF4', 'Md Amad', '01756584931', '96, kamala bagan, mojumdari  Sylhet ', '06643392', true, false, NULL, 'pending', NULL, NULL, 0.00, '2026-07-29 07:28:41.282751+00', '2026-08-01 16:04:08.991+00', false, NULL);
INSERT INTO public.customers VALUES ('7456a423-badd-4d9d-a819-35f49b22759e', 'SE66TEYRB0', 'MD RIPON ', '01712317031', 'Badam bagicha  2 No road 41 No House Sylhet', '87315034', true, false, NULL, 'pending', NULL, NULL, 0.00, '2026-06-23 08:00:09.316931+00', '2026-07-28 09:31:01.299+00', false, NULL);
INSERT INTO public.customers VALUES ('15406502-c26a-4c24-a037-de3c9738badc', 'SEQSICV1EN', 'Md Monir Ahmed', '01710460124', 'Shobid bazar kola para noton Moshjid Sylhet ', '81953703', true, false, NULL, 'pending', NULL, NULL, 0.00, '2026-07-28 08:40:28.752326+00', '2026-08-14 12:02:08.129+00', false, NULL);
INSERT INTO public.customers VALUES ('3a23332f-4933-4c98-95a2-09158ad6bf3f', 'SEGIARKU6A', 'Md Mubin Ahmed', '01752288447', 'Kodom toli yeasin plaza Sylhet ', '00875524', true, false, NULL, 'pending', NULL, NULL, 0.00, '2026-07-31 09:31:20.639829+00', '2026-07-31 09:31:20.639829+00', false, NULL);
INSERT INTO public.customers VALUES ('be9fb053-b2e0-4a95-920b-c6df469dceac', 'SEUO1H6E57', 'Ripa Mahamud', '01310673600', 'Badambagicha Rd No. 4', '11478767', true, false, NULL, 'pending', NULL, NULL, 0.00, '2026-07-23 06:49:41.722519+00', '2026-08-14 22:29:07.743+00', false, NULL);
INSERT INTO public.customers VALUES ('a2286789-fdf7-4edf-be42-1e74a4eeedf9', 'SE6PXQH371', 'Md kobir chw', '01711165192', 'Paharika 5 no  Sylhet ', '72998094', true, false, NULL, 'pending', NULL, NULL, 0.00, '2026-08-09 16:18:18.90751+00', '2026-08-23 23:14:14.456+00', false, NULL);
INSERT INTO public.customers VALUES ('adf0ae49-e9a2-472c-a5b5-472abfed7bf3', 'SEGTHLB4M5', 'Md Biplob Bai', '01712509546', 'Badam bagicha jame moshjid ', '27385729', true, false, NULL, 'pending', NULL, NULL, 0.00, '2026-08-08 14:02:13.307467+00', '2026-08-23 23:14:40.864+00', false, NULL);
INSERT INTO public.customers VALUES ('378b92e1-2016-4981-90b2-83c1fd4e01be', 'SEO2JT65NQ', 'Mohammed Emam', '01792307555', 'Badambagicha Rd No. 3 House no 6B', '87112703', true, false, NULL, 'pending', NULL, NULL, 0.00, '2026-08-12 11:07:19.306658+00', '2026-08-14 17:40:57+00', false, NULL);
INSERT INTO public.customers VALUES ('6ced72b8-58b8-48b0-858e-03488a69f10a', 'SEKW8W38E0', 'Nazmul Motin', '01711778531', '49 Saodagar Tola kumar para Sylhet ', '46181405', true, false, NULL, 'pending', NULL, NULL, 0.00, '2026-08-20 08:51:05.771548+00', '2026-08-21 11:42:43.626+00', false, NULL);
INSERT INTO public.customers VALUES ('53bf42c4-9f60-4746-8e3e-deb80ee383b2', 'SE8RM03D8C', 'Mss. Eva ', '01775400814', '103/a block d Islampur mejortila sylhet ', '66262963', true, false, NULL, 'pending', NULL, NULL, 0.00, '2026-08-17 08:15:17.19577+00', '2026-09-05 15:12:05.331+00', false, NULL);
INSERT INTO public.customers VALUES ('179b76b9-7423-49b6-bd11-e2c1e8967fa1', 'SECPPLB106', 'Mr. Khurshed Alam', '01716442141', 'Kasba Chargachh Bazar Brahmin Bariya', '19668922', true, false, NULL, 'pending', NULL, NULL, 0.00, '2026-08-23 08:57:13.367885+00', '2026-08-25 05:43:15.756+00', false, NULL);
INSERT INTO public.customers VALUES ('4a023f59-ea90-4f70-86a9-ac3d3bfecb34', 'SEULZI14CJ', 'Mokhfur Chowdhury', '01730049205', 'Shahjalal Tower, 27/2 Payra, Flat 7D, (Lift 7), Sylhet', '91049571', true, false, NULL, 'pending', NULL, NULL, 0.00, '2026-08-30 09:59:29.662408+00', '2026-08-30 09:59:29.662408+00', false, NULL);
INSERT INTO public.customers VALUES ('daf79cce-7d56-4d70-986d-1588883c13da', 'SED0JJIDIR', 'MD JOSHIM ', '01660022564', 'Shobid bazar bon kola para sylhet', '93034130', true, false, NULL, 'pending', NULL, NULL, 0.00, '2026-08-30 17:26:19.878015+00', '2026-08-30 17:26:19.878015+00', false, NULL);
INSERT INTO public.customers VALUES ('9906cd4e-0e33-4195-b5d8-b39fad300ddf', 'SERLH0RFSE', 'MD Robel Ahmed', '01712454866', 'Chowkidekhi Sylhet', '11824997', true, false, NULL, 'pending', NULL, NULL, 0.00, '2026-08-28 13:51:01.746041+00', '2026-08-31 18:07:01.447+00', false, NULL);


--
-- Data for Name: contactMessages; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: customerNotifications; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public."customerNotifications" VALUES ('1fd89585-15a4-4e46-9a81-058afb617d0a', 'SEWCFAWBYM', 'staff_appointed', 'প্রিয় গ্রাহক Shabuddin Mahamud, 
আপনার SE9GMIWGQT সার্ভিসটি সমাধানের জন্য সার্ভিস টিম নিয়োগ করা হয়েছে। বিস্তারিত জানতে অনুগ্রহ করে আপনার ড্যাশবোর্ড চেক করুন।', '/customer/services/SE9GMIWGQT', true, '2026-04-17 20:34:27.299797+00');
INSERT INTO public."customerNotifications" VALUES ('3b9af2c3-3f42-4270-915d-903f4cd7068b', 'SEWCFAWBYM', 'application_update', 'প্রিয় Shabuddin Mahamud,
অভিনন্দন! আপনার পছন্দের সাবস্ক্রিপশন প্যাকেজটির আবেদন সফলভাবে যাচাই করা হয়েছে এবং সার্ভিস পয়েন্ট-এ অনুমোদিত হয়েছে৷ যেকোনো তথ্যের জন্য 0964935555', '/customer/profile', true, '2026-04-17 20:33:02.075801+00');
INSERT INTO public."customerNotifications" VALUES ('b3d73efd-fa1d-47af-ab12-18c2cbeba3c7', 'SEWCFAWBYM', 'system', 'Your referral payout request for ৳500 has been completed via bkash.', '/customer/referral', true, '2026-04-17 20:23:15.691676+00');
INSERT INTO public."customerNotifications" VALUES ('32205603-8a34-43ea-aa14-7d2abc060fa8', 'SEWCFAWBYM', 'subscription_submission', 'প্রিয় Shabuddin Mahamud,
আপনার পছন্দের সাবস্ক্রিপশন প্যাকেজটির আবেদন সফলভাবে সাবমিট করেছেন, সাবস্ক্রিপশন আইডি SECP1SAA6C আপনার দেওয়া তথ্য ও পেমেন্ট সংক্রান্ত বিষয় যাচাই করে পরে ধাপে এগিয়ে যাব। সকল তথ্য আপডেট পেতে ট্রেকিং লিংকটি ওপেন করুন। যেকোনো তথ্যের জন্য 09649355555
http://localhost:3000/application-track?trackingId=SEJ3MUPD5W', '/customer/profile', true, '2026-04-17 20:18:29.2322+00');
INSERT INTO public."customerNotifications" VALUES ('f5be6858-6dbe-4b8e-a87b-1b1daacd332c', 'SEWCFAWBYM', 'staff_appointed', 'প্রিয় গ্রাহক Shabuddin Mahamud, 
আপনার SE9GMIWGQT সার্ভিসটি সমাধানের জন্য সার্ভিস টিম নিয়োগ করা হয়েছে। বিস্তারিত জানতে অনুগ্রহ করে আপনার ড্যাশবোর্ড চেক করুন।', '/customer/services/SE9GMIWGQT', true, '2026-04-17 19:35:46.043338+00');
INSERT INTO public."customerNotifications" VALUES ('6e4aa516-0390-430a-9b21-176b302f1197', 'SEWCFAWBYM', 'service_confirmation', 'প্রিয় গ্রাহক Shabuddin Mahamud,
SE ELECTRONICS আপনার সার্ভিসিং এর অনুরোধটি গ্রহণ করা হয়েছে সার্ভিস আই ডি নং SE9GMIWGQT, যে কোন তথ্যের জন্য 09649355555 সার্ভিস স্ট্যাটাস ট্র্যাক করতে লিঙ্কটিতে ক্লিক করুন
http://localhost:3000/service-track?trackingId=SE9GMIWGQT', '/customer/services/SE9GMIWGQT', true, '2026-04-17 19:35:04.43506+00');
INSERT INTO public."customerNotifications" VALUES ('b160a38c-41d9-4edd-8906-56fc9b878b09', 'SEWCFAWBYM', 'referral_bonus', 'আপনার রেফারেলে Ripa Mahamud ক্রয় করেছেন। আপনি ৳640 রেফারেল বোনাস পেয়েছেন!', '/customer/referral', true, '2026-04-17 19:19:17.032879+00');
INSERT INTO public."customerNotifications" VALUES ('a12ce6ef-3a2a-4252-a637-b920c4a08da6', 'SEYSZ0ELKG', 'service_confirmation', 'প্রিয় গ্রাহক মো বিপ্লব তালুকদার,
SE ELECTRONICS আপনার সার্ভিসিং এর অনুরোধটি গ্রহণ করা হয়েছে সার্ভিস আই ডি নং SE3NL80LG0, যে কোন তথ্যের জন্য 09649355555 সার্ভিস স্ট্যাটাস ট্র্যাক করতে লিঙ্কটিতে ক্লিক করুন
http://localhost:3000/service-track?trackingId=SE3NL80LG0', '/customer/services/SE3NL80LG0', false, '2026-04-18 08:48:28.192995+00');
INSERT INTO public."customerNotifications" VALUES ('0dc44892-3638-41a9-8b15-5611242f4fcd', 'SEYSZ0ELKG', 'staff_appointed', 'প্রিয় গ্রাহক মো বিপ্লব তালুকদার,
আপনার SE3NL80LG0 প্যাকেজ টি হোম ইন্সটলেশন করার জন্য অফিসিয়াল ইন্সটল টিমকে নিযুক্ত করা হয়েছে। দ্রুত সময়ের মধ্যে ইন্সটল টিম আপনার সাথে যোগাযোগ করে সমাধান করবে। যে কোন তথ্যের জন্য 09649355555', '/customer/services/SE3NL80LG0', false, '2026-04-18 08:58:40.416403+00');
INSERT INTO public."customerNotifications" VALUES ('55f43132-76e9-4a3b-97c2-cb2c2c4796e9', 'SEYSZ0ELKG', 'referral_bonus', 'আপনার রেফারেলে MD AMINUR ROHOMAN ক্রয় করেছেন। আপনি ৳590 রেফারেল বোনাস পেয়েছেন!', '/customer/referral', false, '2026-04-18 17:35:34.896551+00');
INSERT INTO public."customerNotifications" VALUES ('d850bd81-98b6-4ce0-b6ed-86b82ed2a210', 'SEYSZ0ELKG', 'referral_bonus', 'আপনার রেফারেলে MD MASUD RANA ক্রয় করেছেন। আপনি ৳572 রেফারেল বোনাস পেয়েছেন!', '/customer/referral', false, '2026-04-21 09:20:16.373206+00');
INSERT INTO public."customerNotifications" VALUES ('0ccbc60b-bacf-4b10-ac23-f7926464c0b6', 'SERY4IEAOT', 'service_confirmation', 'প্রিয় গ্রাহক MD AMINUR ROHOMAN,
SE ELECTRONICS আপনার সার্ভিসিং এর অনুরোধটি গ্রহণ করা হয়েছে সার্ভিস আই ডি নং SE1IMT8LUF, যে কোন তথ্যের জন্য 09649355555 সার্ভিস স্ট্যাটাস ট্র্যাক করতে লিঙ্কটিতে ক্লিক করুন
http://localhost:3000/service-track?trackingId=SE1IMT8LUF', '/customer/services/SE1IMT8LUF', false, '2026-04-21 10:32:25.76052+00');
INSERT INTO public."customerNotifications" VALUES ('628f8a6c-fac4-422c-bfcc-00c3ed1abd43', 'SERY4IEAOT', 'staff_appointed', 'প্রিয় গ্রাহক MD AMINUR ROHOMAN,
আপনার SE1IMT8LUF প্যাকেজ টি হোম ইন্সটলেশন করার জন্য অফিসিয়াল ইন্সটল টিমকে নিযুক্ত করা হয়েছে। দ্রুত সময়ের মধ্যে ইন্সটল টিম আপনার সাথে যোগাযোগ করে সমাধান করবে। যে কোন তথ্যের জন্য 09649355555', '/customer/services/SE1IMT8LUF', false, '2026-04-21 20:48:21.384684+00');
INSERT INTO public."customerNotifications" VALUES ('f61852a9-631f-4ec0-abce-e3a8045c7fb3', 'SEP8BEVJJJ', 'service_confirmation', 'প্রিয় গ্রাহক MD SHIEKH RAFI,
SE ELECTRONICS আপনার সার্ভিসিং এর অনুরোধটি গ্রহণ করা হয়েছে সার্ভিস আই ডি নং SE2OP76BL6, যে কোন তথ্যের জন্য 09649355555 সার্ভিস স্ট্যাটাস ট্র্যাক করতে লিঙ্কটিতে ক্লিক করুন
http://localhost:3000/service-track?trackingId=SE2OP76BL6', '/customer/services/SE2OP76BL6', false, '2026-04-22 20:34:55.559485+00');
INSERT INTO public."customerNotifications" VALUES ('2e3d6128-7c22-4203-b47c-4703cbb02053', 'SEP8BEVJJJ', 'staff_appointed', 'প্রিয় গ্রাহক MD SHIEKH RAFI,
আপনার SE2OP76BL6 প্যাকেজ টি হোম ইন্সটলেশন করার জন্য অফিসিয়াল ইন্সটল টিমকে নিযুক্ত করা হয়েছে। দ্রুত সময়ের মধ্যে ইন্সটল টিম আপনার সাথে যোগাযোগ করে সমাধান করবে। যে কোন তথ্যের জন্য 09649355555', '/customer/services/SE2OP76BL6', false, '2026-04-22 20:35:12.435757+00');
INSERT INTO public."customerNotifications" VALUES ('c926ac16-93d2-45c5-bdd0-943f044ff082', 'SE34VSHIB2', 'service_confirmation', 'প্রিয় গ্রাহক MD ABDUL MOTIN ,
SE ELECTRONICS আপনার সার্ভিসিং এর অনুরোধটি গ্রহণ করা হয়েছে সার্ভিস আই ডি নং SEP6UIPHZD, যে কোন তথ্যের জন্য 09649355555 সার্ভিস স্ট্যাটাস ট্র্যাক করতে লিঙ্কটিতে ক্লিক করুন
http://localhost:3000/service-track?trackingId=SEP6UIPHZD', '/customer/services/SEP6UIPHZD', false, '2026-04-23 12:09:50.446428+00');
INSERT INTO public."customerNotifications" VALUES ('fed02438-6c13-46b9-ad1a-0823411d7491', 'SE34VSHIB2', 'staff_appointed', 'প্রিয় গ্রাহক MD ABDUL MOTIN ,
আপনার SEP6UIPHZD প্যাকেজ টি হোম ইন্সটলেশন করার জন্য অফিসিয়াল ইন্সটল টিমকে নিযুক্ত করা হয়েছে। দ্রুত সময়ের মধ্যে ইন্সটল টিম আপনার সাথে যোগাযোগ করে সমাধান করবে। যে কোন তথ্যের জন্য 09649355555', '/customer/services/SEP6UIPHZD', false, '2026-04-23 12:11:45.711078+00');
INSERT INTO public."customerNotifications" VALUES ('144a17f1-cbeb-43d5-b852-dad7381ce3db', 'SED31QHDIM', 'service_confirmation', 'প্রিয় গ্রাহক MD ABDUL MOJID,
SE ELECTRONICS আপনার সার্ভিসিং এর অনুরোধটি গ্রহণ করা হয়েছে সার্ভিস আই ডি নং SEXTF233UC, যে কোন তথ্যের জন্য 09649355555 সার্ভিস স্ট্যাটাস ট্র্যাক করতে লিঙ্কটিতে ক্লিক করুন
http://localhost:3000/service-track?trackingId=SEXTF233UC', '/customer/services/SEXTF233UC', false, '2026-04-24 14:11:24.915468+00');
INSERT INTO public."customerNotifications" VALUES ('249f4423-bb1e-463e-a386-295ba5317a91', 'SED31QHDIM', 'staff_appointed', 'প্রিয় গ্রাহক MD ABDUL MOJID,
আপনার SEXTF233UC প্যাকেজ টি হোম ইন্সটলেশন করার জন্য অফিসিয়াল ইন্সটল টিমকে নিযুক্ত করা হয়েছে। দ্রুত সময়ের মধ্যে ইন্সটল টিম আপনার সাথে যোগাযোগ করে সমাধান করবে। যে কোন তথ্যের জন্য 09649355555', '/customer/services/SEXTF233UC', false, '2026-04-24 14:14:27.713554+00');
INSERT INTO public."customerNotifications" VALUES ('86fe6909-ccc2-43e7-a828-46d786aad674', 'SE34VSHIB2', 'service_completed', 'প্রিয় গ্রাহক MD ABDUL MOTIN ,
আপনার IPS প্যাকেজ ইন্সটল সার্ভিস SEP6UIPHZD, হাউস ওয়ারিং কাজ শেষ হয়েছে৷ অনুগ্রহ করে আপনার ফিডব্যাক এর জন্য ক্লিক করুন:
http://localhost:3000/service-feedback?serviceId=SEP6UIPHZD', '/customer/services/SEP6UIPHZD', false, '2026-04-24 16:15:23.047529+00');
INSERT INTO public."customerNotifications" VALUES ('3e056cf9-3d82-4a28-b045-4cb64233c54e', 'SEWCFAWBYM', 'service_confirmation', 'প্রিয় গ্রাহক Shabuddin Mahamud,
SE ELECTRONICS আপনার সার্ভিসিং এর অনুরোধটি গ্রহণ করা হয়েছে সার্ভিস আই ডি নং SEVGU1SL2H, যে কোন তথ্যের জন্য 09649355555 সার্ভিস স্ট্যাটাস ট্র্যাক করতে লিঙ্কটিতে ক্লিক করুন
https://seelectronicspro.vercel.app/service-track?trackingId=SEVGU1SL2H', '/customer/services/SEVGU1SL2H', false, '2026-04-28 20:43:21.639704+00');
INSERT INTO public."customerNotifications" VALUES ('b5d76c5d-0866-4e99-89bb-9b8c510657f6', 'SEWCFAWBYM', 'staff_appointed', 'প্রিয় গ্রাহক Shabuddin Mahamud, 
আপনার SEVGU1SL2H সার্ভিসটি সমাধানের জন্য সার্ভিস টিম নিয়োগ করা হয়েছে। বিস্তারিত জানতে অনুগ্রহ করে আপনার ড্যাশবোর্ড চেক করুন।', '/customer/services/SEVGU1SL2H', false, '2026-04-28 20:44:22.832915+00');
INSERT INTO public."customerNotifications" VALUES ('8215f240-30cd-44ba-8bb8-5b864857fcae', 'SED31QHDIM', 'service_completed', 'প্রিয় গ্রাহক MD ABDUL MOJID,
আপনার IPS প্যাকেজ ইন্সটল সার্ভিস SEXTF233UC, হাউস ওয়ারিং কাজ শেষ হয়েছে৷ অনুগ্রহ করে আপনার ফিডব্যাক এর জন্য ক্লিক করুন:
https://seelectronicspro.vercel.app/service-feedback?serviceId=SEXTF233UC', '/customer/services/SEXTF233UC', false, '2026-04-30 16:44:06.625158+00');
INSERT INTO public."customerNotifications" VALUES ('3f84f0c8-f7eb-4157-bba4-e71c868ecb92', 'SERBL8II5B', 'service_confirmation', 'প্রিয় গ্রাহক MD MASUD RANA,
SE ELECTRONICS আপনার সার্ভিসিং এর অনুরোধটি গ্রহণ করা হয়েছে সার্ভিস আই ডি নং SE81XT2D1P, যে কোন তথ্যের জন্য 09649355555 সার্ভিস স্ট্যাটাস ট্র্যাক করতে লিঙ্কটিতে ক্লিক করুন
https://seelectronicspro.vercel.app/service-track?trackingId=SE81XT2D1P', '/customer/services/SE81XT2D1P', false, '2026-05-01 15:08:16.536165+00');
INSERT INTO public."customerNotifications" VALUES ('45f24452-c47f-4984-a243-e448cd73f1fd', 'SERBL8II5B', 'staff_appointed', 'প্রিয় গ্রাহক MD MASUD RANA,
আপনার SE81XT2D1P প্যাকেজ টি হোম ইন্সটলেশন করার জন্য অফিসিয়াল ইন্সটল টিমকে নিযুক্ত করা হয়েছে। দ্রুত সময়ের মধ্যে ইন্সটল টিম আপনার সাথে যোগাযোগ করে সমাধান করবে। যে কোন তথ্যের জন্য 09649355555', '/customer/services/SE81XT2D1P', false, '2026-05-01 15:08:49.296866+00');
INSERT INTO public."customerNotifications" VALUES ('f44411fb-6458-433a-a657-855b872eab75', 'SETBR5KC3P', 'service_confirmation', 'প্রিয় গ্রাহক MD MAMUN BAI ,
SE ELECTRONICS আপনার সার্ভিসিং এর অনুরোধটি গ্রহণ করা হয়েছে সার্ভিস আই ডি নং SESPUXV13A, যে কোন তথ্যের জন্য 09649355555 সার্ভিস স্ট্যাটাস ট্র্যাক করতে লিঙ্কটিতে ক্লিক করুন
https://seelectronicspro.vercel.app/service-track?trackingId=SESPUXV13A', '/customer/services/SESPUXV13A', false, '2026-05-02 14:10:11.516709+00');
INSERT INTO public."customerNotifications" VALUES ('b6a67a43-4b51-4a46-8237-c3ac484bc6e7', 'SETBR5KC3P', 'staff_appointed', 'প্রিয় গ্রাহক MD MAMUN BAI ,
আপনার SESPUXV13A প্যাকেজ টি হোম ইন্সটলেশন করার জন্য অফিসিয়াল ইন্সটল টিমকে নিযুক্ত করা হয়েছে। দ্রুত সময়ের মধ্যে ইন্সটল টিম আপনার সাথে যোগাযোগ করে সমাধান করবে। যে কোন তথ্যের জন্য 09649355555', '/customer/services/SESPUXV13A', false, '2026-05-02 14:16:24.547514+00');
INSERT INTO public."customerNotifications" VALUES ('cada80b5-d164-4313-b605-b51b753a7f9c', 'SEWCFAWBYM', 'service_confirmation', 'প্রিয় গ্রাহক Shabuddin Mahamud,
SE ELECTRONICS আপনার সার্ভিসিং এর অনুরোধটি গ্রহণ করা হয়েছে সার্ভিস আই ডি নং SECT2696HO, যে কোন তথ্যের জন্য 09649355555 সার্ভিস স্ট্যাটাস ট্র্যাক করতে লিঙ্কটিতে ক্লিক করুন
https://seelectronicspro.vercel.app/service-track?trackingId=SECT2696HO', '/customer/services/SECT2696HO', false, '2026-05-02 16:26:10.256859+00');
INSERT INTO public."customerNotifications" VALUES ('3ae0283e-769c-4c33-a6ff-5243415d43a2', 'SEWCFAWBYM', 'staff_appointed', 'প্রিয় গ্রাহক Shabuddin Mahamud, 
আপনার SECT2696HO সার্ভিসটি সমাধানের জন্য সার্ভিস টিম নিয়োগ করা হয়েছে। বিস্তারিত জানতে অনুগ্রহ করে আপনার ড্যাশবোর্ড চেক করুন।', '/customer/services/SECT2696HO', false, '2026-05-02 16:26:30.621926+00');
INSERT INTO public."customerNotifications" VALUES ('136565ee-7b10-4aaf-8ecb-bf7900865c06', 'SEHBGMI4B4', 'service_confirmation', 'প্রিয় গ্রাহক MD JOSHIM ,
SE ELECTRONICS আপনার সার্ভিসিং এর অনুরোধটি গ্রহণ করা হয়েছে সার্ভিস আই ডি নং SEO6J6VL6J, যে কোন তথ্যের জন্য 09649355555 সার্ভিস স্ট্যাটাস ট্র্যাক করতে লিঙ্কটিতে ক্লিক করুন
https://seelectronicspro.vercel.app/service-track?trackingId=SEO6J6VL6J', '/customer/services/SEO6J6VL6J', false, '2026-05-04 14:21:52.005982+00');
INSERT INTO public."customerNotifications" VALUES ('affdc122-b76c-48a6-baed-03ac0a707d35', 'SEHBGMI4B4', 'staff_appointed', 'প্রিয় গ্রাহক MD JOSHIM ,
আপনার SEO6J6VL6J প্যাকেজ টি হোম ইন্সটলেশন করার জন্য অফিসিয়াল ইন্সটল টিমকে নিযুক্ত করা হয়েছে। দ্রুত সময়ের মধ্যে ইন্সটল টিম আপনার সাথে যোগাযোগ করে সমাধান করবে। যে কোন তথ্যের জন্য 09649355555', '/customer/services/SEO6J6VL6J', false, '2026-05-05 06:37:32.995235+00');
INSERT INTO public."customerNotifications" VALUES ('785075b7-8931-4c4a-84b2-ca28c05cfd55', 'SEHBGMI4B4', 'service_completed', 'প্রিয় গ্রাহক MD JOSHIM ,
আপনার IPS প্যাকেজ ইন্সটল সার্ভিস SEO6J6VL6J, হাউস ওয়ারিং কাজ শেষ হয়েছে৷ অনুগ্রহ করে আপনার ফিডব্যাক এর জন্য ক্লিক করুন:
https://seelectronicspro.vercel.app/service-feedback?serviceId=SEO6J6VL6J', '/customer/services/SEO6J6VL6J', false, '2026-05-06 04:33:51.740562+00');
INSERT INTO public."customerNotifications" VALUES ('26a7a469-dc6a-4973-8179-30cdb0f3d408', 'SE3TLRL5MG', 'service_confirmation', 'প্রিয় গ্রাহক jamiatul khair al islamiya madrasah.,
SE ELECTRONICS আপনার সার্ভিসিং এর অনুরোধটি গ্রহণ করা হয়েছে সার্ভিস আই ডি নং SEHWH20ZUH, যে কোন তথ্যের জন্য 09649355555 সার্ভিস স্ট্যাটাস ট্র্যাক করতে লিঙ্কটিতে ক্লিক করুন
https://seelectronicspro.vercel.app/service-track?trackingId=SEHWH20ZUH', '/customer/services/SEHWH20ZUH', false, '2026-05-16 07:47:01.928407+00');
INSERT INTO public."customerNotifications" VALUES ('77de032d-8e46-4fa6-a825-2e461ea1c469', 'SE3TLRL5MG', 'staff_appointed', 'প্রিয় গ্রাহক jamiatul khair al islamiya madrasah.,
আপনার SEHWH20ZUH প্যাকেজ টি হোম ইন্সটলেশন করার জন্য অফিসিয়াল ইন্সটল টিমকে নিযুক্ত করা হয়েছে। দ্রুত সময়ের মধ্যে ইন্সটল টিম আপনার সাথে যোগাযোগ করে সমাধান করবে। যে কোন তথ্যের জন্য 09649355555', '/customer/services/SEHWH20ZUH', false, '2026-05-16 07:52:22.044552+00');
INSERT INTO public."customerNotifications" VALUES ('590a6ad3-f173-47f1-97a7-3cf73f23de97', 'SEWCFAWBYM', 'customer-invoice', 'স্বাগতম প্রিয় গ্রাহক Shabuddin Mahamud,
এস ই ইলেকট্রনিকস এ আপনাকে স্বাগতম! আপনার কাস্টমার আইডি: SEWCFAWBYM এবং ইনভয়েস নম্বর: 64438577। লগইন করে ইনভয়েস ডাউনলোড করতে ভিজিট করুন: https://seelectronicspro.vercel.app/customer/login। কাস্টমার কেয়ার 09649355555', '/customer/profile', false, '2026-06-28 19:49:15.779059+00');
INSERT INTO public."customerNotifications" VALUES ('ac13ad05-5054-4b6b-b4d0-57caf8658818', 'SE3TLRL5MG', 'staff_appointed', 'প্রিয় গ্রাহক jamiatul khair al islamiya madrasah.77000 , 
আপনার SEDMVUT0WI সার্ভিসটি সমাধানের জন্য সার্ভিস টিম নিয়োগ করা হয়েছে। বিস্তারিত জানতে অনুগ্রহ করে আপনার ড্যাশবোর্ড চেক করুন।', '/customer/services/SEDMVUT0WI', true, '2026-05-18 07:01:12.805178+00');
INSERT INTO public."customerNotifications" VALUES ('9b5c019f-bb28-4673-a5ca-2e9cbc395b62', 'SE3TLRL5MG', 'service_completed', 'প্রিয় গ্রাহক jamiatul khair al islamiya madrasah.,
আপনার IPS প্যাকেজ ইন্সটল সার্ভিস SEHWH20ZUH, হাউস ওয়ারিং কাজ শেষ হয়েছে৷ অনুগ্রহ করে আপনার ফিডব্যাক এর জন্য ক্লিক করুন:
https://seelectronicspro.vercel.app/service-feedback?serviceId=SEHWH20ZUH', '/customer/services/SEHWH20ZUH', true, '2026-05-17 07:18:06.06134+00');
INSERT INTO public."customerNotifications" VALUES ('22b7b2d3-da99-4e66-a39d-5a2b51da2cbb', 'SE3TLRL5MG', 'service_confirmation', 'প্রিয় গ্রাহক jamiatul khair al islamiya madrasah.77000 ,
SE ELECTRONICS আপনার সার্ভিসিং এর অনুরোধটি গ্রহণ করা হয়েছে সার্ভিস আই ডি নং SEDMVUT0WI, যে কোন তথ্যের জন্য 09649355555 সার্ভিস স্ট্যাটাস ট্র্যাক করতে লিঙ্কটিতে ক্লিক করুন
https://seelectronicspro.vercel.app/service-track?trackingId=SEDMVUT0WI', '/customer/services/SEDMVUT0WI', true, '2026-05-18 06:19:00.738726+00');
INSERT INTO public."customerNotifications" VALUES ('6e55b25a-a1c4-4c82-82c0-cb355f0d868a', 'SE3TLRL5MG', 'service_completed', 'প্রিয় গ্রাহক jamiatul khair al islamiya madrasah.77000 ,
আপনার সার্ভিস SEDMVUT0WI সার্ভিসটি সমাধান করা হয়েছে। অনুগ্রহ করে আপনার ফিডব্যাক এর জন্য ক্লিক করুন:
https://seelectronicspro.vercel.app/service-feedback?serviceId=SEDMVUT0WI', '/customer/services/SEDMVUT0WI', false, '2026-05-21 07:24:23.736245+00');
INSERT INTO public."customerNotifications" VALUES ('91f8c31a-2ec3-41c4-a8c0-3baff1940357', 'SEWCFAWBYM', 'customer-invoice', 'স্বাগতম প্রিয় গ্রাহক Shabuddin Mahamud,
এস ই ইলেকট্রনিকস এ আপনাকে স্বাগতম! আপনার কাস্টমার আইডি: SEWCFAWBYM এবং ইনভয়েস নম্বর: 64438577। লগইন করে ইনভয়েস ডাউনলোড করতে ভিজিট করুন: https://seelectronicspro.vercel.app/customer/login। কাস্টমার কেয়ার 09649355555', '/customer/profile', true, '2026-06-28 19:22:32.161614+00');
INSERT INTO public."customerNotifications" VALUES ('e76297ad-8942-4526-8d3d-55bf08e161fa', 'SEWCFAWBYM', 'service_confirmation', 'প্রিয় গ্রাহক Shabuddin Mahamud,
SE ELECTRONICS আপনার সার্ভিসিং এর অনুরোধটি গ্রহণ করা হয়েছে সার্ভিস আই ডি নং SEPVF9ZVSB, যে কোন তথ্যের জন্য 09649355555 সার্ভিস স্ট্যাটাস ট্র্যাক করতে লিঙ্কটিতে ক্লিক করুন
https://seelectronicspro.vercel.app/service-track?trackingId=SEPVF9ZVSB', '/customer/services/SEPVF9ZVSB', false, '2026-06-28 23:26:29.076236+00');
INSERT INTO public."customerNotifications" VALUES ('47a6f23f-0221-4f79-a350-32eeff2d3b82', 'SEWCFAWBYM', 'staff_appointed', 'প্রিয় গ্রাহক Shabuddin Mahamud, 
আপনার SEPVF9ZVSB সার্ভিসটি সমাধানের জন্য সার্ভিস টিম নিয়োগ করা হয়েছে। বিস্তারিত জানতে অনুগ্রহ করে আপনার ড্যাশবোর্ড চেক করুন।', '/customer/services/SEPVF9ZVSB', false, '2026-06-28 23:26:58.527686+00');
INSERT INTO public."customerNotifications" VALUES ('f29b1c6b-22a9-48cf-abe5-b53b6da1ee89', 'SEWCFAWBYM', 'staff_appointed', 'প্রিয় গ্রাহক Shabuddin Mahamud, 
আপনার SEPVF9ZVSB সার্ভিসটি সমাধানের জন্য সার্ভিস টিম নিয়োগ করা হয়েছে। বিস্তারিত জানতে অনুগ্রহ করে আপনার ড্যাশবোর্ড চেক করুন।', '/customer/services/SEPVF9ZVSB', false, '2026-06-28 23:54:02.044522+00');
INSERT INTO public."customerNotifications" VALUES ('7f856389-2480-4d63-9289-d4e116a94133', 'SEP728Z15J', 'customer-invoice', 'স্বাগতম প্রিয় গ্রাহক MD SHOJIB AHMED , 
এস ই ইলেকট্রনিকস থেকে পন্য ক্রয় করার জন্য আপনাকে ধন্যবাদ। আপনার একটি প্রোফাইল তৈরি হয়েছে। কাস্টমার আই ডি : SEP728Z15J এবং ইনভয়েস নম্বর: 66144181 দিয়ে লগিং করতে লিংকটি ক্লিক করুন। পন্যের তথ্য , সার্ভিস যাবতীয় সকল কিছু  দেখতে লগিং করে হোম পেইজে রাখুন।

লগইন করে ইনভয়েস ডাউনলোড করতে ভিজিট করুন: https://seelectronicspro.vercel.app/customer/login। কাস্টমার কেয়ার 09649355555
  ', '/customer/profile', false, '2026-06-30 16:18:19.591042+00');
INSERT INTO public."customerNotifications" VALUES ('2672de02-39bf-40dd-98fa-236ada58bf13', 'SEP728Z15J', 'customer-invoice', 'স্বাগতম প্রিয় গ্রাহক MD SOJIB AHMED , 
এস ই ইলেকট্রনিকস থেকে পন্য ক্রয় করার জন্য আপনাকে ধন্যবাদ। আপনার একটি প্রোফাইল তৈরি হয়েছে। কাস্টমার আই ডি : SEP728Z15J এবং ইনভয়েস নম্বর: 66144181 দিয়ে লগিং করতে লিংকটি ক্লিক করুন। পন্যের তথ্য , সার্ভিস যাবতীয় সকল কিছু  দেখতে লগিং করে হোম পেইজে রাখুন।

লগইন করে ইনভয়েস ডাউনলোড করতে ভিজিট করুন: https://seelectronicspro.vercel.app/customer/login। কাস্টমার কেয়ার 09649355555
  ', '/customer/profile', false, '2026-07-01 13:48:21.083807+00');
INSERT INTO public."customerNotifications" VALUES ('6ea740d8-e829-42c6-8b9c-a52ca36cc52e', 'SEWCFAWBYM', 'customer-invoice', 'স্বাগতম প্রিয় গ্রাহক Shabuddin Mahamud, 
এস ই ইলেকট্রনিকস থেকে পন্য ক্রয় করার জন্য আপনাকে ধন্যবাদ। আপনার একটি প্রোফাইল তৈরি হয়েছে। কাস্টমার আই ডি : SEWCFAWBYM এবং ইনভয়েস নম্বর: 64438577 দিয়ে লগিং করতে লিংকটি ক্লিক করুন। পন্যের তথ্য , সার্ভিস যাবতীয় সকল কিছু  দেখতে লগিং করে হোম পেইজে রাখুন।

লগইন করে ইনভয়েস ডাউনলোড করতে ভিজিট করুন: https://seelectronicspro.vercel.app/customer/login। কাস্টমার কেয়ার 09649355555
  ', '/customer/profile', false, '2026-07-01 13:50:05.810869+00');
INSERT INTO public."customerNotifications" VALUES ('4b198b4c-cb06-4c1f-8c9b-7ba84fad09ed', 'SE34VSHIB2', 'service_confirmation', 'প্রিয় গ্রাহক MD ABDUL MOTIN ,
SE ELECTRONICS আপনার সার্ভিসিং এর অনুরোধটি গ্রহণ করা হয়েছে সার্ভিস আই ডি নং SECU0EX66G, যে কোন তথ্যের জন্য 09649355555 সার্ভিস স্ট্যাটাস ট্র্যাক করতে লিঙ্কটিতে ক্লিক করুন
https://seelectronicspro.vercel.app/service-track?trackingId=SECU0EX66G', '/customer/services/SECU0EX66G', false, '2026-07-08 06:27:32.275204+00');
INSERT INTO public."customerNotifications" VALUES ('702e64a3-0ea7-4b0e-83fd-d335c452093c', 'SEOYW3C1SY', 'service_confirmation', 'প্রিয় গ্রাহক Shanjida Naj,
SE ELECTRONICS আপনার সার্ভিসিং এর অনুরোধটি গ্রহণ করা হয়েছে সার্ভিস আই ডি নং SEYVGZZS6F, যে কোন তথ্যের জন্য 09649355555 সার্ভিস স্ট্যাটাস ট্র্যাক করতে লিঙ্কটিতে ক্লিক করুন
https://seelectronicspro.vercel.app/service-track?trackingId=SEYVGZZS6F', '/customer/services/SEYVGZZS6F', false, '2026-07-19 14:48:18.607474+00');
INSERT INTO public."customerNotifications" VALUES ('fe6fda93-0b12-4048-8166-88a4599236f4', 'SEC96ZEINO', 'customer-invoice', 'স্বাগতম প্রিয় গ্রাহক ATIKUR ROHOMAN, 
এস ই ইলেকট্রনিকস থেকে পন্য ক্রয় করার জন্য আপনাকে ধন্যবাদ। আপনার একটি প্রোফাইল তৈরি হয়েছে। কাস্টমার আই ডি : SEC96ZEINO এবং ইনভয়েস নম্বর: 49162389 দিয়ে লগিং করতে লিংকটি ক্লিক করুন। পন্যের তথ্য , সার্ভিস যাবতীয় সকল কিছু  দেখতে লগিং করে হোম পেইজে রাখুন।

লগইন করে ইনভয়েস ডাউনলোড করতে ভিজিট করুন: https://seelectronicspro.vercel.app/customer/login। কাস্টমার কেয়ার 09649355555
  ', '/customer/profile', false, '2026-07-02 19:21:17.125673+00');
INSERT INTO public."customerNotifications" VALUES ('a2e81c67-1f8e-4910-974e-b07f95da0b5c', 'SEC96ZEINO', 'service_confirmation', 'প্রিয় গ্রাহক ATIKUR ROHOMAN,
SE ELECTRONICS আপনার সার্ভিসিং এর অনুরোধটি গ্রহণ করা হয়েছে সার্ভিস আই ডি নং SEP7WH2OO3, যে কোন তথ্যের জন্য 09649355555 সার্ভিস স্ট্যাটাস ট্র্যাক করতে লিঙ্কটিতে ক্লিক করুন
https://seelectronicspro.vercel.app/service-track?trackingId=SEP7WH2OO3', '/customer/services/SEP7WH2OO3', false, '2026-07-02 19:31:25.577633+00');
INSERT INTO public."customerNotifications" VALUES ('2fe1ed48-e824-48f0-b5d0-ad6638ad00cd', 'SEC96ZEINO', 'staff_appointed', 'প্রিয় গ্রাহক ATIKUR ROHOMAN, 
আপনার SEP7WH2OO3 সার্ভিসটি সমাধানের জন্য সার্ভিস টিম নিয়োগ করা হয়েছে। বিস্তারিত জানতে অনুগ্রহ করে আপনার ড্যাশবোর্ড চেক করুন।', '/customer/services/SEP7WH2OO3', false, '2026-07-02 19:31:45.281337+00');
INSERT INTO public."customerNotifications" VALUES ('b3f6b9d5-7506-44c2-b4ca-c641eee8a186', 'SEC96ZEINO', 'customer-invoice', 'স্বাগতম প্রিয় গ্রাহক ATIKUR ROHOMAN, 
এস ই ইলেকট্রনিকস থেকে পন্য ক্রয় করার জন্য আপনাকে ধন্যবাদ। আপনার একটি প্রোফাইল তৈরি হয়েছে। কাস্টমার আই ডি : SEC96ZEINO এবং ইনভয়েস নম্বর: 49162389 দিয়ে লগিং করতে লিংকটি ক্লিক করুন। পন্যের তথ্য , সার্ভিস যাবতীয় সকল কিছু  দেখতে লগিং করে হোম পেইজে রাখুন।

লগইন করে ইনভয়েস ডাউনলোড করতে ভিজিট করুন: https://seelectronicspro.vercel.app/customer/login। কাস্টমার কেয়ার 09649355555
  ', '/customer/profile', false, '2026-07-06 17:10:35.108116+00');
INSERT INTO public."customerNotifications" VALUES ('0f3b6182-176f-4d45-8d64-b739b8012fee', 'SE34VSHIB2', 'staff_appointed', 'প্রিয় গ্রাহক MD ABDUL MOTIN , 
আপনার SECU0EX66G সার্ভিসটি সমাধানের জন্য সার্ভিস টিম নিয়োগ করা হয়েছে। বিস্তারিত জানতে অনুগ্রহ করে আপনার ড্যাশবোর্ড চেক করুন।', '/customer/services/SECU0EX66G', false, '2026-07-09 05:11:04.309218+00');
INSERT INTO public."customerNotifications" VALUES ('c695682f-bec9-43fb-8866-4b5afe507339', 'SEWCFAWBYM', 'staff_appointed', 'প্রিয় গ্রাহক Shabuddin Mahamud, 
আপনার SEM7WP5GO3 সার্ভিসটি সমাধানের জন্য সার্ভিস টিম নিয়োগ করা হয়েছে। বিস্তারিত জানতে অনুগ্রহ করে আপনার ড্যাশবোর্ড চেক করুন।', '/customer/services/SEM7WP5GO3', true, '2026-07-04 16:41:47.472764+00');
INSERT INTO public."customerNotifications" VALUES ('17951086-2c5f-4740-bcf9-c52f85185003', 'SEWCFAWBYM', 'referral_bonus', 'আপনার রেফারেলে ATIKUR ROHOMAN ক্রয় করেছেন। আপনি ৳240 রেফারেল বোনাস পেয়েছেন!', '/customer/referral', true, '2026-07-02 19:21:19.385826+00');
INSERT INTO public."customerNotifications" VALUES ('90f9412f-22a6-48bf-bf81-facf1a6cb14a', 'SEWCFAWBYM', 'customer-invoice', 'স্বাগতম প্রিয় গ্রাহক Shabuddin Mahamud, 
এস ই ইলেকট্রনিকস থেকে পন্য ক্রয় করার জন্য আপনাকে ধন্যবাদ। আপনার একটি প্রোফাইল তৈরি হয়েছে। কাস্টমার আই ডি : SEWCFAWBYM এবং ইনভয়েস নম্বর: 64438577 দিয়ে লগিং করতে লিংকটি ক্লিক করুন। পন্যের তথ্য , সার্ভিস যাবতীয় সকল কিছু  দেখতে লগিং করে হোম পেইজে রাখুন।

লগইন করে ইনভয়েস ডাউনলোড করতে ভিজিট করুন: https://seelectronicspro.vercel.app/customer/login। কাস্টমার কেয়ার 09649355555
  ', '/customer/profile', true, '2026-07-02 05:35:14.763402+00');
INSERT INTO public."customerNotifications" VALUES ('f16aba39-aa6b-43af-968d-3f4028866170', 'SEWCFAWBYM', 'customer-invoice', 'স্বাগতম প্রিয় গ্রাহক Shabuddin Mahamud, 
এস ই ইলেকট্রনিকস থেকে পন্য ক্রয় করার জন্য আপনাকে ধন্যবাদ। আপনার একটি প্রোফাইল তৈরি হয়েছে। কাস্টমার আই ডি : SEWCFAWBYM এবং ইনভয়েস নম্বর: 64438577 দিয়ে লগিং করতে লিংকটি ক্লিক করুন। পন্যের তথ্য , সার্ভিস যাবতীয় সকল কিছু  দেখতে লগিং করে হোম পেইজে রাখুন।

লগইন করে ইনভয়েস ডাউনলোড করতে ভিজিট করুন: https://seelectronicspro.vercel.app/customer/login। কাস্টমার কেয়ার 09649355555
  ', '/customer/profile', true, '2026-07-02 05:33:37.242352+00');
INSERT INTO public."customerNotifications" VALUES ('6cd80460-0332-4d2d-929d-e4f5af5f208b', 'SEH73UD7W2', 'customer-invoice', 'স্বাগতম প্রিয় গ্রাহক Md Yakub ali, 
এস ই ইলেকট্রনিকস থেকে পন্য ক্রয় করার জন্য আপনাকে ধন্যবাদ। আপনার একটি প্রোফাইল তৈরি হয়েছে। কাস্টমার আই ডি : SEH73UD7W2 এবং ইনভয়েস নম্বর: 24997384 দিয়ে লগিং করতে লিংকটি ক্লিক করুন। পন্যের তথ্য , সার্ভিস যাবতীয় সকল কিছু  দেখতে লগিং করে হোম পেইজে রাখুন।

লগইন করে ইনভয়েস ডাউনলোড করতে ভিজিট করুন: https://seelectronicspro.vercel.app/customer/login। কাস্টমার কেয়ার 09649355555
  ', '/customer/profile', false, '2026-07-13 13:55:44.734383+00');
INSERT INTO public."customerNotifications" VALUES ('a42090fa-1f36-4a07-ac77-146d6c358511', 'SEP728Z15J', 'referral_bonus', 'আপনার রেফারেলে Talha Khan ক্রয় করেছেন। আপনি ৳200 রেফারেল বোনাস পেয়েছেন!', '/customer/referral', false, '2026-07-13 17:35:34.376638+00');
INSERT INTO public."customerNotifications" VALUES ('29c93241-87d1-4f7d-a7cb-f21673992fd3', 'SEP728Z15J', 'referral_bonus', 'আপনার রেফারেলে Talha Khan ক্রয় করেছেন। আপনি ৳200 রেফারেল বোনাস পেয়েছেন!', '/customer/referral', false, '2026-07-13 17:38:36.859444+00');
INSERT INTO public."customerNotifications" VALUES ('d0daffb8-e2f1-4abd-9886-3b06c4938be8', 'SEP728Z15J', 'referral_bonus', 'আপনার রেফারেলে Talha Khan ক্রয় করেছেন। আপনি ৳200 রেফারেল বোনাস পেয়েছেন!', '/customer/referral', false, '2026-07-13 18:04:14.213899+00');
INSERT INTO public."customerNotifications" VALUES ('3fd1056a-87c2-480b-9faf-0a9176cd2f9a', 'SE4V7QF15D', 'customer-invoice', 'স্বাগতম প্রিয় গ্রাহক Lovely dev roy, 
এস ই ইলেকট্রনিকস থেকে পন্য ক্রয় করার জন্য আপনাকে ধন্যবাদ। আপনার একটি প্রোফাইল তৈরি হয়েছে। কাস্টমার আই ডি : SE4V7QF15D এবং ইনভয়েস নম্বর: 76511164 দিয়ে লগিং করতে লিংকটি ক্লিক করুন। পন্যের তথ্য , সার্ভিস যাবতীয় সকল কিছু  দেখতে লগিং করে হোম পেইজে রাখুন।

লগইন করে ইনভয়েস ডাউনলোড করতে ভিজিট করুন: https://seelectronicspro.vercel.app/customer/login। কাস্টমার কেয়ার 09649355555
  ', '/customer/profile', false, '2026-07-14 07:28:20.714608+00');
INSERT INTO public."customerNotifications" VALUES ('03fac4aa-94a6-494e-87d0-b4203bc19af1', 'SEP728Z15J', 'referral_bonus', 'আপনার রেফারেলে Talha Khan ক্রয় করেছেন। আপনি ৳200 রেফারেল বোনাস পেয়েছেন!', '/customer/referral', false, '2026-07-14 20:58:46.936875+00');
INSERT INTO public."customerNotifications" VALUES ('f6f117f3-c661-4e49-9574-1e9a4e4227b8', 'SEP728Z15J', 'referral_bonus', 'আপনার রেফারেলে Talha Khan ক্রয় করেছেন। আপনি ৳200 রেফারেল বোনাস পেয়েছেন!', '/customer/referral', false, '2026-07-16 13:54:39.135906+00');
INSERT INTO public."customerNotifications" VALUES ('d3baafc5-070c-40d0-8e7e-a07e89d2d45d', 'SEWCFAWBYM', 'referral_bonus', 'আপনার রেফারেলে Shabuddin Mahamud ক্রয় করেছেন। আপনি ৳250 রেফারেল বোনাস পেয়েছেন!', '/customer/referral', true, '2026-07-16 10:46:24.647487+00');
INSERT INTO public."customerNotifications" VALUES ('a618b420-30ad-4120-9564-8010e42d6fb2', 'SEWCFAWBYM', 'referral_bonus', 'আপনার রেফারেলে MD SHABUDDIN MAHAMUD ক্রয় করেছেন। আপনি ৳250 রেফারেল বোনাস পেয়েছেন!', '/customer/referral', true, '2026-07-15 11:40:49.442086+00');
INSERT INTO public."customerNotifications" VALUES ('02e52cf4-376f-4c78-990d-1055bc299f5d', 'SEWCFAWBYM', 'referral_bonus', 'আপনার রেফারেলে MD SHABUDDIN MAHAMUD ক্রয় করেছেন। আপনি ৳290 রেফারেল বোনাস পেয়েছেন!', '/customer/referral', true, '2026-07-14 07:40:15.296128+00');
INSERT INTO public."customerNotifications" VALUES ('090e78fc-91fa-4ce1-83c2-433f276a2d96', 'SEWCFAWBYM', 'referral_bonus', 'আপনার রেফারেলে MD SHABUDDIN MAHAMUD ক্রয় করেছেন। আপনি ৳240 রেফারেল বোনাস পেয়েছেন!', '/customer/referral', true, '2026-07-14 07:35:51.396974+00');
INSERT INTO public."customerNotifications" VALUES ('ba0e7791-ca5d-4c99-b88f-cad0c9e801a3', 'SEWCFAWBYM', 'referral_bonus', 'আপনার রেফারেলে Shabuddin Mahamud ক্রয় করেছেন। আপনি ৳200 রেফারেল বোনাস পেয়েছেন!', '/customer/referral', true, '2026-07-13 17:49:53.200997+00');
INSERT INTO public."customerNotifications" VALUES ('1b87392f-c310-4fe1-806c-7e62510c5e7b', 'SEWCFAWBYM', 'referral_bonus', 'আপনার রেফারেলে MD SHABUDDIN MAHAMUD ক্রয় করেছেন। আপনি ৳250 রেফারেল বোনাস পেয়েছেন!', '/customer/referral', true, '2026-07-13 14:14:45.552715+00');
INSERT INTO public."customerNotifications" VALUES ('4b67e87e-60b1-475d-af62-a77649803bbc', 'SEWCFAWBYM', 'referral_bonus', 'আপনার রেফারেলে Md Yakub ali ক্রয় করেছেন। আপনি ৳250 রেফারেল বোনাস পেয়েছেন!', '/customer/referral', true, '2026-07-13 13:55:47.504883+00');
INSERT INTO public."customerNotifications" VALUES ('b55defe7-6cae-4722-a65f-618e1796eb0d', 'SEWCFAWBYM', 'service_confirmation', 'প্রিয় গ্রাহক Shabuddin Mahamud,
SE ELECTRONICS আপনার সার্ভিসিং এর অনুরোধটি গ্রহণ করা হয়েছে সার্ভিস আই ডি নং SEM7WP5GO3, যে কোন তথ্যের জন্য 09649355555 সার্ভিস স্ট্যাটাস ট্র্যাক করতে লিঙ্কটিতে ক্লিক করুন
https://seelectronicspro.vercel.app/service-track?trackingId=SEM7WP5GO3', '/customer/services/SEM7WP5GO3', true, '2026-07-04 16:40:56.968528+00');
INSERT INTO public."customerNotifications" VALUES ('f97632dc-a719-41a3-87af-bc6a49c0660e', 'SEWCFAWBYM', 'customer-invoice', 'স্বাগতম প্রিয় গ্রাহক Shabuddin Mahamud, 
এস ই ইলেকট্রনিকস থেকে পন্য ক্রয় করার জন্য আপনাকে ধন্যবাদ। আপনার একটি প্রোফাইল তৈরি হয়েছে। কাস্টমার আই ডি : SEWCFAWBYM এবং ইনভয়েস নম্বর: 64438577 দিয়ে লগিং করতে লিংকটি ক্লিক করুন। পন্যের তথ্য , সার্ভিস যাবতীয় সকল কিছু  দেখতে লগিং করে হোম পেইজে রাখুন।

লগইন করে ইনভয়েস ডাউনলোড করতে ভিজিট করুন: https://seelectronicspro.vercel.app/customer/login। কাস্টমার কেয়ার 09649355555
  ', '/customer/profile', true, '2026-07-02 05:35:57.955804+00');
INSERT INTO public."customerNotifications" VALUES ('c94e5fef-68ef-4c29-a3b6-d03a368b9b62', 'SEUO1H6E57', 'staff_appointed', 'প্রিয় গ্রাহক Ripa Mahamud, 
আপনার SE9P4TN8HF সার্ভিসটি সমাধানের জন্য সার্ভিস টিম নিয়োগ করা হয়েছে। বিস্তারিত জানতে অনুগ্রহ করে আপনার ড্যাশবোর্ড চেক করুন।', '/customer/services/SE9P4TN8HF', false, '2026-07-27 20:30:51.336766+00');
INSERT INTO public."customerNotifications" VALUES ('f2776ae3-a965-4e1d-8311-a12ab8de1398', 'SEOYW3C1SY', 'staff_appointed', 'প্রিয় গ্রাহক Shanjida Naj, 
আপনার SEYVGZZS6F সার্ভিসটি সমাধানের জন্য সার্ভিস টিম নিয়োগ করা হয়েছে। বিস্তারিত জানতে অনুগ্রহ করে আপনার ড্যাশবোর্ড চেক করুন।', '/customer/services/SEYVGZZS6F', false, '2026-07-21 05:38:56.249631+00');
INSERT INTO public."customerNotifications" VALUES ('2f716a9c-cbfc-40b7-b9c1-71464a9d8e1c', 'SE5850EG4Y', 'customer-invoice', 'স্বাগতম প্রিয় গ্রাহক Majida Chowdhury, 
এস ই ইলেকট্রনিকস থেকে পন্য ক্রয় করার জন্য আপনাকে ধন্যবাদ। আপনার একটি প্রোফাইল তৈরি হয়েছে। কাস্টমার আই ডি : SE5850EG4Y এবং ইনভয়েস নম্বর: 84737577 দিয়ে লগিং করতে লিংকটি ক্লিক করুন। পন্যের তথ্য , সার্ভিস যাবতীয় সকল কিছু  দেখতে লগিং করে হোম পেইজে রাখুন।

লগইন করে ইনভয়েস ডাউনলোড করতে ভিজিট করুন: https://seelectronicspro.vercel.app/customer/login। কাস্টমার কেয়ার 09649355555
  ', '/customer/profile', false, '2026-07-21 06:53:40.791771+00');
INSERT INTO public."customerNotifications" VALUES ('e83844a0-9a48-4ecf-8237-0504fc1b74bc', 'SE5850EG4Y', 'service_confirmation', 'প্রিয় গ্রাহক Majida Chowdhury,
SE ELECTRONICS আপনার সার্ভিসিং এর অনুরোধটি গ্রহণ করা হয়েছে সার্ভিস আই ডি নং SEFXHSDOCW, যে কোন তথ্যের জন্য 09649355555 সার্ভিস স্ট্যাটাস ট্র্যাক করতে লিঙ্কটিতে ক্লিক করুন
https://seelectronicspro.vercel.app/service-track?trackingId=SEFXHSDOCW', '/customer/services/SEFXHSDOCW', false, '2026-07-21 07:01:18.17471+00');
INSERT INTO public."customerNotifications" VALUES ('752b3538-ab28-4abc-aabb-f010faab45b5', 'SEECX49SUT', 'customer-invoice', 'স্বাগতম প্রিয় গ্রাহক MD AHILL MAHAMUD, 
এস ই ইলেকট্রনিকস থেকে পন্য ক্রয় করার জন্য আপনাকে ধন্যবাদ। আপনার একটি প্রোফাইল তৈরি হয়েছে। কাস্টমার আই ডি : SEECX49SUT এবং ইনভয়েস নম্বর: 04667950 দিয়ে লগিং করতে লিংকটি ক্লিক করুন। পন্যের তথ্য , সার্ভিস যাবতীয় সকল কিছু  দেখতে লগিং করে হোম পেইজে রাখুন।

লগইন করে ইনভয়েস ডাউনলোড করতে ভিজিট করুন: https://seelectronicspro.vercel.app/customer/login। কাস্টমার কেয়ার 09649355555
  ', '/customer/profile', false, '2026-07-22 16:17:02.629617+00');
INSERT INTO public."customerNotifications" VALUES ('1e63939e-bef8-4175-bd18-2156a370da1e', 'SEECX49SUT', 'service_confirmation', 'প্রিয় গ্রাহক MD AHILL MAHAMUD,
SE ELECTRONICS আপনার সার্ভিসিং এর অনুরোধটি গ্রহণ করা হয়েছে সার্ভিস আই ডি নং SECXA773DJ, যে কোন তথ্যের জন্য 09649355555 সার্ভিস স্ট্যাটাস ট্র্যাক করতে লিঙ্কটিতে ক্লিক করুন
https://seelectronicspro.vercel.app/service-track?trackingId=SECXA773DJ', '/customer/services/SECXA773DJ', false, '2026-07-22 16:18:06.299085+00');
INSERT INTO public."customerNotifications" VALUES ('6c07404f-66e2-4b78-b815-cb55cc4734dd', 'SEECX49SUT', 'staff_appointed', 'প্রিয় গ্রাহক MD AHILL MAHAMUD, 
আপনার SECXA773DJ সার্ভিসটি সমাধানের জন্য সার্ভিস টিম নিয়োগ করা হয়েছে। বিস্তারিত জানতে অনুগ্রহ করে আপনার ড্যাশবোর্ড চেক করুন।', '/customer/services/SECXA773DJ', false, '2026-07-22 16:23:32.055275+00');
INSERT INTO public."customerNotifications" VALUES ('3851f350-21fb-4c6a-8c6e-614b083b8369', 'SEUO1H6E57', 'service_confirmation', 'প্রিয় গ্রাহক Ripa Mahamud,
SE ELECTRONICS আপনার সার্ভিসিং এর অনুরোধটি গ্রহণ করা হয়েছে সার্ভিস আই ডি নং SEX70E6YCJ, যে কোন তথ্যের জন্য 09649355555 সার্ভিস স্ট্যাটাস ট্র্যাক করতে লিঙ্কটিতে ক্লিক করুন
https://seelectronicspro.vercel.app/service-track?trackingId=SEX70E6YCJ', '/customer/services/SEX70E6YCJ', false, '2026-07-23 06:58:35.867826+00');
INSERT INTO public."customerNotifications" VALUES ('3d697efa-e5bd-4be6-9b56-b8d32bc1ae67', 'SEUO1H6E57', 'staff_appointed', 'প্রিয় গ্রাহক Ripa Mahamud, 
আপনার SEX70E6YCJ সার্ভিসটি সমাধানের জন্য সার্ভিস টিম নিয়োগ করা হয়েছে। বিস্তারিত জানতে অনুগ্রহ করে আপনার ড্যাশবোর্ড চেক করুন।', '/customer/services/SEX70E6YCJ', false, '2026-07-23 07:01:49.806828+00');
INSERT INTO public."customerNotifications" VALUES ('65203f67-fcaf-4432-ba7c-5049f92fe3b6', 'SE5850EG4Y', 'staff_appointed', 'প্রিয় গ্রাহক Majida Chowdhury,
আপনার SEFXHSDOCW প্যাকেজ টি হোম ইন্সটলেশন করার জন্য অফিসিয়াল ইন্সটল টিমকে নিযুক্ত করা হয়েছে। দ্রুত সময়ের মধ্যে ইন্সটল টিম আপনার সাথে যোগাযোগ করে সমাধান করবে। যে কোন তথ্যের জন্য 09649355555', '/customer/services/SEFXHSDOCW', false, '2026-07-25 06:26:22.60916+00');
INSERT INTO public."customerNotifications" VALUES ('53048e5a-7fdb-4c49-ab96-5c4cb6bdcbc9', 'SEUO1H6E57', 'service_confirmation', 'প্রিয় গ্রাহক Ripa Mahamud,
SE ELECTRONICS আপনার সার্ভিসিং এর অনুরোধটি গ্রহণ করা হয়েছে সার্ভিস আই ডি নং SEJMWXJTY0, যে কোন তথ্যের জন্য 09649355555 সার্ভিস স্ট্যাটাস ট্র্যাক করতে লিঙ্কটিতে ক্লিক করুন
https://seelectronicspro.vercel.app/service-track?trackingId=SEJMWXJTY0', '/customer/services/SEJMWXJTY0', false, '2026-07-25 12:26:15.157274+00');
INSERT INTO public."customerNotifications" VALUES ('a5194503-b54b-48d7-adb3-a90d96ba0c74', 'SEUO1H6E57', 'staff_appointed', 'প্রিয় গ্রাহক Ripa Mahamud, 
আপনার SEJMWXJTY0 সার্ভিসটি সমাধানের জন্য সার্ভিস টিম নিয়োগ করা হয়েছে। বিস্তারিত জানতে অনুগ্রহ করে আপনার ড্যাশবোর্ড চেক করুন।', '/customer/services/SEJMWXJTY0', false, '2026-07-25 13:15:39.555202+00');
INSERT INTO public."customerNotifications" VALUES ('9acd4af5-673d-4b30-8b67-4408d1946473', 'SEUO1H6E57', 'service_confirmation', 'প্রিয় গ্রাহক Ripa Mahamud,
SE ELECTRONICS আপনার সার্ভিসিং এর অনুরোধটি গ্রহণ করা হয়েছে সার্ভিস আই ডি নং SEI67FXH04, যে কোন তথ্যের জন্য 09649355555 সার্ভিস স্ট্যাটাস ট্র্যাক করতে লিঙ্কটিতে ক্লিক করুন
https://seelectronicspro.vercel.app/service-track?trackingId=SEI67FXH04', '/customer/services/SEI67FXH04', false, '2026-07-27 06:01:54.698874+00');
INSERT INTO public."customerNotifications" VALUES ('03237809-5be5-449f-96ca-72b11082e867', 'SEUO1H6E57', 'staff_appointed', 'প্রিয় গ্রাহক Ripa Mahamud, 
আপনার SEI67FXH04 সার্ভিসটি সমাধানের জন্য সার্ভিস টিম নিয়োগ করা হয়েছে। বিস্তারিত জানতে অনুগ্রহ করে আপনার ড্যাশবোর্ড চেক করুন।', '/customer/services/SEI67FXH04', false, '2026-07-27 06:02:57.333744+00');
INSERT INTO public."customerNotifications" VALUES ('baa03e62-993f-4549-aaac-a81c8d8b5eb4', 'SEUO1H6E57', 'service_confirmation', 'প্রিয় গ্রাহক Ripa Mahamud,
SE ELECTRONICS আপনার সার্ভিসিং এর অনুরোধটি গ্রহণ করা হয়েছে সার্ভিস আই ডি নং SE9P4TN8HF, যে কোন তথ্যের জন্য 09649355555 সার্ভিস স্ট্যাটাস ট্র্যাক করতে লিঙ্কটিতে ক্লিক করুন
https://seelectronicspro.vercel.app/service-track?trackingId=SE9P4TN8HF', '/customer/services/SE9P4TN8HF', false, '2026-07-27 20:27:53.606712+00');
INSERT INTO public."customerNotifications" VALUES ('33db9e81-c08f-414f-8870-43e104ad02eb', 'SEUO1H6E57', 'staff_appointed', 'প্রিয় গ্রাহক Ripa Mahamud, 
আপনার SE9P4TN8HF সার্ভিসটি সমাধানের জন্য সার্ভিস টিম নিয়োগ করা হয়েছে। বিস্তারিত জানতে অনুগ্রহ করে আপনার ড্যাশবোর্ড চেক করুন।', '/customer/services/SE9P4TN8HF', false, '2026-07-27 20:28:28.302475+00');
INSERT INTO public."customerNotifications" VALUES ('e5017cfb-1181-4b2c-bb8a-1af1803fa21f', 'SEUO1H6E57', 'service_confirmation', 'প্রিয় গ্রাহক Ripa Mahamud,
SE ELECTRONICS আপনার সার্ভিসিং এর অনুরোধটি গ্রহণ করা হয়েছে সার্ভিস আই ডি নং SE0L1SFOOH, যে কোন তথ্যের জন্য 09649355555 সার্ভিস স্ট্যাটাস ট্র্যাক করতে লিঙ্কটিতে ক্লিক করুন
https://seelectronicspro.vercel.app/service-track?trackingId=SE0L1SFOOH', '/customer/services/SE0L1SFOOH', false, '2026-07-27 20:36:52.391246+00');
INSERT INTO public."customerNotifications" VALUES ('37fb91df-7764-40b1-9351-71532b445dde', 'SEUO1H6E57', 'staff_appointed', 'প্রিয় গ্রাহক Ripa Mahamud, 
আপনার SE0L1SFOOH সার্ভিসটি সমাধানের জন্য সার্ভিস টিম নিয়োগ করা হয়েছে। বিস্তারিত জানতে অনুগ্রহ করে আপনার ড্যাশবোর্ড চেক করুন।', '/customer/services/SE0L1SFOOH', false, '2026-07-27 20:37:15.013369+00');
INSERT INTO public."customerNotifications" VALUES ('75b4399f-dd77-40ed-85a8-acd676e7c02d', 'SEUO1H6E57', 'service_confirmation', 'প্রিয় গ্রাহক Ripa Mahamud,
SE ELECTRONICS আপনার সার্ভিসিং এর অনুরোধটি গ্রহণ করা হয়েছে সার্ভিস আই ডি নং SEZIYMUAYG, যে কোন তথ্যের জন্য 09649355555 সার্ভিস স্ট্যাটাস ট্র্যাক করতে লিঙ্কটিতে ক্লিক করুন
https://seelectronicspro.vercel.app/service-track?trackingId=SEZIYMUAYG', '/customer/services/SEZIYMUAYG', false, '2026-07-27 20:45:44.640459+00');
INSERT INTO public."customerNotifications" VALUES ('81cb6a13-2793-4d10-af3a-be92742e7cff', 'SEQSICV1EN', 'customer-invoice', 'স্বাগতম প্রিয় গ্রাহক Md Monir Ahmed, 
এস ই ইলেকট্রনিকস থেকে পন্য ক্রয় করার জন্য আপনাকে ধন্যবাদ। আপনার একটি প্রোফাইল তৈরি হয়েছে। কাস্টমার আই ডি : SEQSICV1EN এবং ইনভয়েস নম্বর: 81953703 দিয়ে লগিং করতে লিংকটি ক্লিক করুন। পন্যের তথ্য , সার্ভিস যাবতীয় সকল কিছু  দেখতে লগিং করে হোম পেইজে রাখুন।

লগইন করে ইনভয়েস ডাউনলোড করতে ভিজিট করুন: https://seelectronicspro.vercel.app/customer/login। কাস্টমার কেয়ার 09649355555
  ', '/customer/profile', false, '2026-07-28 08:40:40.283574+00');
INSERT INTO public."customerNotifications" VALUES ('32fe0d99-49bf-4156-8eb0-1e4235f13f12', 'SEQSICV1EN', 'service_confirmation', 'প্রিয় গ্রাহক Md Monir Ahmed,
SE ELECTRONICS আপনার সার্ভিসিং এর অনুরোধটি গ্রহণ করা হয়েছে সার্ভিস আই ডি নং SEVTH0NE5K, যে কোন তথ্যের জন্য 09649355555 সার্ভিস স্ট্যাটাস ট্র্যাক করতে লিঙ্কটিতে ক্লিক করুন
https://seelectronicspro.vercel.app/service-track?trackingId=SEVTH0NE5K', '/customer/services/SEVTH0NE5K', false, '2026-07-28 08:41:20.773241+00');
INSERT INTO public."customerNotifications" VALUES ('65b70fb3-fce6-4453-a357-28b9c077728b', 'SE66TEYRB0', 'customer-invoice', 'স্বাগতম প্রিয় গ্রাহক MD RIPON , 
এস ই ইলেকট্রনিকস থেকে পন্য ক্রয় করার জন্য আপনাকে ধন্যবাদ। আপনার একটি প্রোফাইল তৈরি হয়েছে। কাস্টমার আই ডি : SE66TEYRB0 এবং ইনভয়েস নম্বর: 87315034 দিয়ে লগিং করতে লিংকটি ক্লিক করুন। পন্যের তথ্য , সার্ভিস যাবতীয় সকল কিছু  দেখতে লগিং করে হোম পেইজে রাখুন।

লগইন করে ইনভয়েস ডাউনলোড করতে ভিজিট করুন: https://seelectronicspro.vercel.app/customer/login। কাস্টমার কেয়ার 09649355555
  ', '/customer/profile', false, '2026-07-28 09:31:03.222814+00');
INSERT INTO public."customerNotifications" VALUES ('be26b4db-13b6-458e-8233-3bab5f62a715', 'SEHIGKRDF4', 'customer-invoice', 'স্বাগতম প্রিয় গ্রাহক Md Amad, 
এস ই ইলেকট্রনিকস থেকে পন্য ক্রয় করার জন্য আপনাকে ধন্যবাদ। আপনার একটি প্রোফাইল তৈরি হয়েছে। কাস্টমার আই ডি : SEHIGKRDF4 এবং ইনভয়েস নম্বর: 06643392 দিয়ে লগিং করতে লিংকটি ক্লিক করুন। পন্যের তথ্য , সার্ভিস যাবতীয় সকল কিছু  দেখতে লগিং করে হোম পেইজে রাখুন।

লগইন করে ইনভয়েস ডাউনলোড করতে ভিজিট করুন: https://seelectronicspro.vercel.app/customer/login। কাস্টমার কেয়ার 09649355555
  ', '/customer/profile', false, '2026-07-29 07:29:20.990903+00');
INSERT INTO public."customerNotifications" VALUES ('417f374e-b5c8-41f9-ba80-15a8f1b69543', 'SEHIGKRDF4', 'customer-invoice', 'স্বাগতম প্রিয় গ্রাহক Md Amad, 
এস ই ইলেকট্রনিকস থেকে পন্য ক্রয় করার জন্য আপনাকে ধন্যবাদ। আপনার একটি প্রোফাইল তৈরি হয়েছে। কাস্টমার আই ডি : SEHIGKRDF4 এবং ইনভয়েস নম্বর: 06643392 দিয়ে লগিং করতে লিংকটি ক্লিক করুন। পন্যের তথ্য , সার্ভিস যাবতীয় সকল কিছু  দেখতে লগিং করে হোম পেইজে রাখুন।

লগইন করে ইনভয়েস ডাউনলোড করতে ভিজিট করুন: https://seelectronicspro.vercel.app/customer/login। কাস্টমার কেয়ার 09649355555
  ', '/customer/profile', false, '2026-07-31 15:12:37.099877+00');
INSERT INTO public."customerNotifications" VALUES ('82a10f52-33fa-45a4-9b39-99694771d70a', 'SEUO1H6E57', 'staff_appointed', 'প্রিয় গ্রাহক Ripa Mahamud, 
আপনার SEZIYMUAYG সার্ভিসটি সমাধানের জন্য সার্ভিস টিম নিয়োগ করা হয়েছে। বিস্তারিত জানতে অনুগ্রহ করে আপনার ড্যাশবোর্ড চেক করুন।', '/customer/services/SEZIYMUAYG', true, '2026-07-27 20:46:30.167266+00');
INSERT INTO public."customerNotifications" VALUES ('d1dd248e-4015-40db-bfed-7dac62bf6737', 'SEQSICV1EN', 'customer-invoice', 'স্বাগতম প্রিয় গ্রাহক Md Monir Ahmed, 
এস ই ইলেকট্রনিকস থেকে পন্য ক্রয় করার জন্য আপনাকে ধন্যবাদ। আপনার একটি প্রোফাইল তৈরি হয়েছে। কাস্টমার আই ডি : SEQSICV1EN এবং ইনভয়েস নম্বর: 81953703 দিয়ে লগিং করতে লিংকটি ক্লিক করুন। পন্যের তথ্য , সার্ভিস যাবতীয় সকল কিছু  দেখতে লগিং করে হোম পেইজে রাখুন।

লগইন করে ইনভয়েস ডাউনলোড করতে ভিজিট করুন: https://seelectronicspro.vercel.app/customer/login। কাস্টমার কেয়ার 09649355555
  ', '/customer/profile', false, '2026-08-01 10:02:41.757355+00');
INSERT INTO public."customerNotifications" VALUES ('dffea8b2-3624-4b86-9951-7a941b7c5012', 'SEHIGKRDF4', 'customer-invoice', 'স্বাগতম প্রিয় গ্রাহক Md Amad, 
এস ই ইলেকট্রনিকস থেকে পন্য ক্রয় করার জন্য আপনাকে ধন্যবাদ। আপনার একটি প্রোফাইল তৈরি হয়েছে। কাস্টমার আই ডি : SEHIGKRDF4 এবং ইনভয়েস নম্বর: 06643392 দিয়ে লগিং করতে লিংকটি ক্লিক করুন। পন্যের তথ্য , সার্ভিস যাবতীয় সকল কিছু  দেখতে লগিং করে হোম পেইজে রাখুন।

লগইন করে ইনভয়েস ডাউনলোড করতে ভিজিট করুন: https://seelectronicspro.vercel.app/customer/login। কাস্টমার কেয়ার 09649355555
  ', '/customer/profile', false, '2026-08-01 16:04:10.897074+00');
INSERT INTO public."customerNotifications" VALUES ('f0d441d8-0314-403b-a4d4-fea02eb2dfe4', 'SEQSICV1EN', 'staff_appointed', 'প্রিয় গ্রাহক Md Monir Ahmed,
আপনার SEVTH0NE5K প্যাকেজ টি হোম ইন্সটলেশন করার জন্য অফিসিয়াল ইন্সটল টিমকে নিযুক্ত করা হয়েছে। দ্রুত সময়ের মধ্যে ইন্সটল টিম আপনার সাথে যোগাযোগ করে সমাধান করবে। যে কোন তথ্যের জন্য 09649355555', '/customer/services/SEVTH0NE5K', false, '2026-08-02 13:32:27.532308+00');
INSERT INTO public."customerNotifications" VALUES ('b65464fe-06f2-4767-89bd-ff2185d42195', 'SEGIARKU6A', 'customer-invoice', 'স্বাগতম প্রিয় গ্রাহক Md Mubin Ahmed, 
এস ই ইলেকট্রনিকস থেকে পন্য ক্রয় করার জন্য আপনাকে ধন্যবাদ। আপনার একটি প্রোফাইল তৈরি হয়েছে। কাস্টমার আই ডি : SEGIARKU6A এবং ইনভয়েস নম্বর: 00875524 দিয়ে লগিং করতে লিংকটি ক্লিক করুন। পন্যের তথ্য , সার্ভিস যাবতীয় সকল কিছু  দেখতে লগিং করে হোম পেইজে রাখুন।

লগইন করে ইনভয়েস ডাউনলোড করতে ভিজিট করুন: https://seelectronicspro.vercel.app/customer/login। কাস্টমার কেয়ার 09649355555
  ', '/customer/profile', true, '2026-07-31 09:31:22.265877+00');
INSERT INTO public."customerNotifications" VALUES ('93bdcae1-b774-46cb-9a07-bb99b09c0a2b', 'SEWCFAWBYM', 'system', 'Your referral payout request for ৳1000 has been completed via bkash.', '/customer/referral', true, '2026-07-18 21:25:07.779376+00');
INSERT INTO public."customerNotifications" VALUES ('b7d4223d-29aa-4026-a2f8-c3cbb0519e6b', 'SEWCFAWBYM', 'staff_appointed', 'প্রিয় গ্রাহক Shabuddin Mahamud, 
আপনার SEM7WP5GO3 সার্ভিসটি সমাধানের জন্য সার্ভিস টিম নিয়োগ করা হয়েছে। বিস্তারিত জানতে অনুগ্রহ করে আপনার ড্যাশবোর্ড চেক করুন।', '/customer/services/SEM7WP5GO3', true, '2026-07-27 19:54:55.349499+00');
INSERT INTO public."customerNotifications" VALUES ('8b3c6e17-10d3-4ab8-ac22-631c59e26442', 'SE3FCX0GMI', 'customer-invoice', 'স্বাগতম প্রিয় গ্রাহক Amir Mia, 
এস ই ইলেকট্রনিকস থেকে পন্য ক্রয় করার জন্য আপনাকে ধন্যবাদ। আপনার একটি প্রোফাইল তৈরি হয়েছে। কাস্টমার আই ডি : SE3FCX0GMI এবং ইনভয়েস নম্বর: 50581514 দিয়ে লগিং করতে লিংকটি ক্লিক করুন। পন্যের তথ্য , সার্ভিস যাবতীয় সকল কিছু  দেখতে লগিং করে হোম পেইজে রাখুন।

লগইন করে ইনভয়েস ডাউনলোড করতে ভিজিট করুন: https://seelectronicspro.vercel.app/customer/login। কাস্টমার কেয়ার 09649355555
  ', '/customer/profile', false, '2026-08-05 08:14:19.936728+00');
INSERT INTO public."customerNotifications" VALUES ('be7474f1-e910-42e8-8a37-bc260e941962', 'SEXM6JA1VL', 'customer-invoice', 'স্বাগতম প্রিয় গ্রাহক MD. RAKIB HUSSEN, 
এস ই ইলেকট্রনিকস থেকে পন্য ক্রয় করার জন্য আপনাকে ধন্যবাদ। আপনার একটি প্রোফাইল তৈরি হয়েছে। কাস্টমার আই ডি : SEXM6JA1VL এবং ইনভয়েস নম্বর: 63015932 দিয়ে লগিং করতে লিংকটি ক্লিক করুন। পন্যের তথ্য , সার্ভিস যাবতীয় সকল কিছু  দেখতে লগিং করে হোম পেইজে রাখুন।

লগইন করে ইনভয়েস ডাউনলোড করতে ভিজিট করুন: https://seelectronicspro.vercel.app/customer/login। কাস্টমার কেয়ার 09649355555
  ', '/customer/profile', false, '2026-08-08 09:01:38.526578+00');
INSERT INTO public."customerNotifications" VALUES ('7cb42039-28a8-4150-a4eb-4f8ecb67fa36', 'SEXM6JA1VL', 'service_confirmation', 'প্রিয় গ্রাহক MD. RAKIB HUSSEN,
SE ELECTRONICS আপনার সার্ভিসিং এর অনুরোধটি গ্রহণ করা হয়েছে সার্ভিস আই ডি নং SEBRAMTYNK, যে কোন তথ্যের জন্য 09649355555 সার্ভিস স্ট্যাটাস ট্র্যাক করতে লিঙ্কটিতে ক্লিক করুন
https://seelectronicspro.vercel.app/service-track?trackingId=SEBRAMTYNK', '/customer/services/SEBRAMTYNK', false, '2026-08-08 09:01:52.023827+00');
INSERT INTO public."customerNotifications" VALUES ('278a8172-8e75-45b2-8a45-5ae67d6364b5', 'SEXM6JA1VL', 'service_confirmation', 'প্রিয় গ্রাহক MD. RAKIB HUSSEN,
SE ELECTRONICS আপনার সার্ভিসিং এর অনুরোধটি গ্রহণ করা হয়েছে সার্ভিস আই ডি নং SEBCBQY8QO, যে কোন তথ্যের জন্য 09649355555 সার্ভিস স্ট্যাটাস ট্র্যাক করতে লিঙ্কটিতে ক্লিক করুন
https://seelectronicspro.vercel.app/service-track?trackingId=SEBCBQY8QO', '/customer/services/SEBCBQY8QO', false, '2026-08-08 09:28:59.814018+00');
INSERT INTO public."customerNotifications" VALUES ('3671ecea-5a89-4f4f-b827-0be9f803b374', 'SEGTHLB4M5', 'customer-invoice', 'স্বাগতম প্রিয় গ্রাহক Md Biplob Bai, 
এস ই ইলেকট্রনিকস থেকে পন্য ক্রয় করার জন্য আপনাকে ধন্যবাদ। আপনার একটি প্রোফাইল তৈরি হয়েছে। কাস্টমার আই ডি : SEGTHLB4M5 এবং ইনভয়েস নম্বর: 27385729 দিয়ে লগিং করতে লিংকটি ক্লিক করুন। পন্যের তথ্য , সার্ভিস যাবতীয় সকল কিছু  দেখতে লগিং করে হোম পেইজে রাখুন।

লগইন করে ইনভয়েস ডাউনলোড করতে ভিজিট করুন: https://seelectronicspro.vercel.app/customer/login। কাস্টমার কেয়ার 09649355555
  ', '/customer/profile', false, '2026-08-08 14:02:14.947114+00');
INSERT INTO public."customerNotifications" VALUES ('2ab3a99d-a659-445e-b3dd-850f3901a4cc', 'SEA1AKR40C', 'customer-invoice', 'স্বাগতম প্রিয় গ্রাহক FATIMA INTR, 
এস ই ইলেকট্রনিকস থেকে পন্য ক্রয় করার জন্য আপনাকে ধন্যবাদ। আপনার একটি প্রোফাইল তৈরি হয়েছে। কাস্টমার আই ডি : SEA1AKR40C এবং ইনভয়েস নম্বর: 14016761 দিয়ে লগিং করতে লিংকটি ক্লিক করুন। পন্যের তথ্য , সার্ভিস যাবতীয় সকল কিছু  দেখতে লগিং করে হোম পেইজে রাখুন।

লগইন করে ইনভয়েস ডাউনলোড করতে ভিজিট করুন: https://seelectronicspro.vercel.app/customer/login। কাস্টমার কেয়ার 09649355555
  ', '/customer/profile', false, '2026-08-09 12:54:54.718009+00');
INSERT INTO public."customerNotifications" VALUES ('541ba78e-6d77-4b2b-97dd-ea9d316b566c', 'SE6PXQH371', 'customer-invoice', 'স্বাগতম প্রিয় গ্রাহক Md kobir chw, 
এস ই ইলেকট্রনিকস থেকে পন্য ক্রয় করার জন্য আপনাকে ধন্যবাদ। আপনার একটি প্রোফাইল তৈরি হয়েছে। কাস্টমার আই ডি : SE6PXQH371 এবং ইনভয়েস নম্বর: 72998094 দিয়ে লগিং করতে লিংকটি ক্লিক করুন। পন্যের তথ্য , সার্ভিস যাবতীয় সকল কিছু  দেখতে লগিং করে হোম পেইজে রাখুন।

লগইন করে ইনভয়েস ডাউনলোড করতে ভিজিট করুন: https://seelectronicspro.vercel.app/customer/login। কাস্টমার কেয়ার 09649355555
  ', '/customer/profile', false, '2026-08-09 16:18:20.537175+00');
INSERT INTO public."customerNotifications" VALUES ('e9c773b6-c743-46b5-ac22-c3fca4307ae1', 'SENPBR9M2A', 'service_confirmation', 'প্রিয় গ্রাহক MD HADI,
SE ELECTRONICS আপনার সার্ভিসিং এর অনুরোধটি গ্রহণ করা হয়েছে সার্ভিস আই ডি নং SETSEA3JAO, যে কোন তথ্যের জন্য 09649355555 সার্ভিস স্ট্যাটাস ট্র্যাক করতে লিঙ্কটিতে ক্লিক করুন
https://seelectronicspro.vercel.app/service-track?trackingId=SETSEA3JAO', '/customer/services/SETSEA3JAO', false, '2026-08-11 04:10:57.859594+00');
INSERT INTO public."customerNotifications" VALUES ('5d4ad7d5-4e10-453e-b986-fc2db28810b2', 'SENPBR9M2A', 'staff_appointed', 'প্রিয় গ্রাহক MD HADI, 
আপনার SETSEA3JAO সার্ভিসটি সমাধানের জন্য সার্ভিস টিম নিয়োগ করা হয়েছে। বিস্তারিত জানতে অনুগ্রহ করে আপনার ড্যাশবোর্ড চেক করুন।', '/customer/services/SETSEA3JAO', false, '2026-08-11 12:11:14.327272+00');
INSERT INTO public."customerNotifications" VALUES ('c38912d8-042a-44c9-85c6-633fa4674229', 'SEWCFAWBYM', 'service_confirmation', 'প্রিয় গ্রাহক Shabuddin Mahamud,
SE ELECTRONICS আপনার সার্ভিসিং এর অনুরোধটি গ্রহণ করা হয়েছে সার্ভিস আই ডি নং SE7ET1KA65, যে কোন তথ্যের জন্য 09649355555 সার্ভিস স্ট্যাটাস ট্র্যাক করতে লিঙ্কটিতে ক্লিক করুন
https://seelectronicspro.vercel.app/service-track?trackingId=SE7ET1KA65', '/customer/services/SE7ET1KA65', true, '2026-08-11 11:54:40.586847+00');
INSERT INTO public."customerNotifications" VALUES ('ef6f8762-7550-4e74-bf74-e3afa24485ea', 'SENPBR9M2A', 'service_completed', 'প্রিয় গ্রাহক MD HADI,
আপনার সার্ভিস SETSEA3JAO সার্ভিসটি সমাধান করা হয়েছে। অনুগ্রহ করে আপনার ফিডব্যাক এর জন্য ক্লিক করুন:
https://seelectronicspro.vercel.app/service-feedback?serviceId=SETSEA3JAO', '/customer/services/SETSEA3JAO', false, '2026-08-12 10:55:23.74748+00');
INSERT INTO public."customerNotifications" VALUES ('6f42cc2d-4709-403b-9bed-83e73232b5b6', 'SEA1AKR40C', 'service_confirmation', 'প্রিয় গ্রাহক FATIMA INTR,
SE ELECTRONICS আপনার সার্ভিসিং এর অনুরোধটি গ্রহণ করা হয়েছে সার্ভিস আই ডি নং SE2JYULTV0, যে কোন তথ্যের জন্য 09649355555 সার্ভিস স্ট্যাটাস ট্র্যাক করতে লিঙ্কটিতে ক্লিক করুন
https://seelectronicspro.vercel.app/service-track?trackingId=SE2JYULTV0', '/customer/services/SE2JYULTV0', false, '2026-08-13 08:04:01.49083+00');
INSERT INTO public."customerNotifications" VALUES ('88999c8e-4509-4fa7-896e-d2b4161bc7b9', 'SEA1AKR40C', 'staff_appointed', 'প্রিয় গ্রাহক FATIMA INTR,
আপনার SE2JYULTV0 প্যাকেজ টি হোম ইন্সটলেশন করার জন্য অফিসিয়াল ইন্সটল টিমকে নিযুক্ত করা হয়েছে। দ্রুত সময়ের মধ্যে ইন্সটল টিম আপনার সাথে যোগাযোগ করে সমাধান করবে। যে কোন তথ্যের জন্য 09649355555', '/customer/services/SE2JYULTV0', false, '2026-08-13 08:04:48.94064+00');
INSERT INTO public."customerNotifications" VALUES ('6e52eefb-a47c-4f3d-83ec-8a6cd88d9f9b', 'SEA1AKR40C', 'service_completed', 'প্রিয় গ্রাহক FATIMA INTR,
আপনার IPS প্যাকেজ ইন্সটল সার্ভিস SE2JYULTV0, হাউস ওয়ারিং কাজ শেষ হয়েছে৷ অনুগ্রহ করে আপনার ফিডব্যাক এর জন্য ক্লিক করুন:
https://seelectronicspro.vercel.app/service-feedback?serviceId=SE2JYULTV0', '/customer/services/SE2JYULTV0', false, '2026-08-14 09:19:43.72735+00');
INSERT INTO public."customerNotifications" VALUES ('b9870ce7-4382-4784-a618-20ac16810eb6', 'SE5850EG4Y', 'service_completed', 'প্রিয় গ্রাহক Majida Chowdhury,
আপনার IPS প্যাকেজ ইন্সটল সার্ভিস SEFXHSDOCW, হাউস ওয়ারিং কাজ শেষ হয়েছে৷ অনুগ্রহ করে আপনার ফিডব্যাক এর জন্য ক্লিক করুন:
https://seelectronicspro.vercel.app/service-feedback?serviceId=SEFXHSDOCW', '/customer/services/SEFXHSDOCW', false, '2026-08-14 09:22:06.907332+00');
INSERT INTO public."customerNotifications" VALUES ('98962ce1-a6a5-43af-b62c-3094750cd241', 'SEUO1H6E57', 'staff_appointed', 'প্রিয় গ্রাহক Ripa Mahamud, 
আপনার SEZIYMUAYG সার্ভিসটি সমাধানের জন্য সার্ভিস টিম নিয়োগ করা হয়েছে। বিস্তারিত জানতে অনুগ্রহ করে আপনার ড্যাশবোর্ড চেক করুন।', '/customer/services/SEZIYMUAYG', false, '2026-08-14 22:20:05.112919+00');
INSERT INTO public."customerNotifications" VALUES ('72390735-7637-477f-ade0-e4016a97b483', 'SEXM6JA1VL', 'staff_appointed', 'প্রিয় গ্রাহক MD. RAKIB HUSSEN,
আপনার SEBCBQY8QO প্যাকেজ টি হোম ইন্সটলেশন করার জন্য অফিসিয়াল ইন্সটল টিমকে নিযুক্ত করা হয়েছে। দ্রুত সময়ের মধ্যে ইন্সটল টিম আপনার সাথে যোগাযোগ করে সমাধান করবে। যে কোন তথ্যের জন্য 09649355555', '/customer/services/SEBCBQY8QO', false, '2026-08-15 14:17:10.778832+00');
INSERT INTO public."customerNotifications" VALUES ('3329711f-ce13-4332-9fa3-faaf5cbc88a6', 'SEWCFAWBYM', 'system', 'Your referral payout request for ৳100 has been completed via nagad.', '/customer/referral', true, '2026-08-14 21:41:45.989392+00');
INSERT INTO public."customerNotifications" VALUES ('739a53bd-f817-41ef-b930-4322f8e2e808', 'SE8RM03D8C', 'customer-invoice', 'স্বাগতম প্রিয় গ্রাহক Mss. Eva, 
এস ই ইলেকট্রনিকস থেকে পন্য ক্রয় করার জন্য আপনাকে ধন্যবাদ। আপনার একটি প্রোফাইল তৈরি হয়েছে। কাস্টমার আই ডি : SE8RM03D8C এবং ইনভয়েস নম্বর: 66262963 দিয়ে লগিং করতে লিংকটি ক্লিক করুন। পন্যের তথ্য , সার্ভিস যাবতীয় সকল কিছু  দেখতে লগিং করে হোম পেইজে রাখুন।

লগইন করে ইনভয়েস ডাউনলোড করতে ভিজিট করুন: https://seelectronicspro.vercel.app/customer/login। কাস্টমার কেয়ার 09649355555
  ', '/customer/profile', false, '2026-08-17 08:15:18.754882+00');
INSERT INTO public."customerNotifications" VALUES ('32087d1b-5a3d-455c-92c4-6025e9388d83', 'SE8RM03D8C', 'service_confirmation', 'প্রিয় গ্রাহক Mss. Eva ,
SE ELECTRONICS আপনার সার্ভিসিং এর অনুরোধটি গ্রহণ করা হয়েছে সার্ভিস আই ডি নং SE53W3BWD7, যে কোন তথ্যের জন্য 09649355555 সার্ভিস স্ট্যাটাস ট্র্যাক করতে লিঙ্কটিতে ক্লিক করুন
https://seelectronicspro.vercel.app/service-track?trackingId=SE53W3BWD7', '/customer/services/SE53W3BWD7', false, '2026-08-17 08:19:55.998464+00');
INSERT INTO public."customerNotifications" VALUES ('8fd997cc-0d8f-4907-b22f-1a46593862a2', 'SE8RM03D8C', 'customer-invoice', 'স্বাগতম প্রিয় গ্রাহক Mss. Eva , 
এস ই ইলেকট্রনিকস থেকে পন্য ক্রয় করার জন্য আপনাকে ধন্যবাদ। আপনার একটি প্রোফাইল তৈরি হয়েছে। কাস্টমার আই ডি : SE8RM03D8C এবং ইনভয়েস নম্বর: 66262963 দিয়ে লগিং করতে লিংকটি ক্লিক করুন। পন্যের তথ্য , সার্ভিস যাবতীয় সকল কিছু  দেখতে লগিং করে হোম পেইজে রাখুন।

লগইন করে ইনভয়েস ডাউনলোড করতে ভিজিট করুন: https://seelectronicspro.vercel.app/customer/login। কাস্টমার কেয়ার 09649355555
  ', '/customer/profile', false, '2026-08-17 08:23:45.134078+00');
INSERT INTO public."customerNotifications" VALUES ('68c62285-e909-4b21-b7b3-a3580bc61139', 'SEKW8W38E0', 'customer-invoice', 'স্বাগতম প্রিয় গ্রাহক Nazmul Motin, 
এস ই ইলেকট্রনিকস থেকে পন্য ক্রয় করার জন্য আপনাকে ধন্যবাদ। আপনার একটি প্রোফাইল তৈরি হয়েছে। কাস্টমার আই ডি : SEKW8W38E0 এবং ইনভয়েস নম্বর: 46181405 দিয়ে লগিং করতে লিংকটি ক্লিক করুন। পন্যের তথ্য , সার্ভিস যাবতীয় সকল কিছু  দেখতে লগিং করে হোম পেইজে রাখুন।

লগইন করে ইনভয়েস ডাউনলোড করতে ভিজিট করুন: https://seelectronicspro.vercel.app/customer/login। কাস্টমার কেয়ার 09649355555
  ', '/customer/profile', false, '2026-08-20 08:51:07.56269+00');
INSERT INTO public."customerNotifications" VALUES ('e34567de-833a-46a2-ba30-4d363ceaa3e4', 'SEKW8W38E0', 'service_confirmation', 'প্রিয় গ্রাহক Nazmul Motin,
SE ELECTRONICS আপনার সার্ভিসিং এর অনুরোধটি গ্রহণ করা হয়েছে সার্ভিস আই ডি নং SETM13C0HL, যে কোন তথ্যের জন্য 09649355555 সার্ভিস স্ট্যাটাস ট্র্যাক করতে লিঙ্কটিতে ক্লিক করুন
https://seelectronicspro.vercel.app/service-track?trackingId=SETM13C0HL', '/customer/services/SETM13C0HL', false, '2026-08-20 09:11:57.158127+00');
INSERT INTO public."customerNotifications" VALUES ('529d66f9-949d-444f-94ad-d3545d595fe0', 'SEKW8W38E0', 'staff_appointed', 'প্রিয় গ্রাহক Nazmul Motin,
আপনার SETM13C0HL প্যাকেজ টি হোম ইন্সটলেশন করার জন্য অফিসিয়াল ইন্সটল টিমকে নিযুক্ত করা হয়েছে। দ্রুত সময়ের মধ্যে ইন্সটল টিম আপনার সাথে যোগাযোগ করে সমাধান করবে। যে কোন তথ্যের জন্য 09649355555', '/customer/services/SETM13C0HL', false, '2026-08-21 08:25:27.941743+00');
INSERT INTO public."customerNotifications" VALUES ('4e1b2644-8fad-4cd2-b98f-d5606d1885d0', 'SECPPLB106', 'customer-invoice', 'স্বাগতম প্রিয় গ্রাহক Mr. Khurshed Alam, 
এস ই ইলেকট্রনিকস থেকে পন্য ক্রয় করার জন্য আপনাকে ধন্যবাদ। আপনার একটি প্রোফাইল তৈরি হয়েছে। কাস্টমার আই ডি : SECPPLB106 এবং ইনভয়েস নম্বর: 19668922 দিয়ে লগিং করতে লিংকটি ক্লিক করুন। পন্যের তথ্য , সার্ভিস যাবতীয় সকল কিছু  দেখতে লগিং করে হোম পেইজে রাখুন।

লগইন করে ইনভয়েস ডাউনলোড করতে ভিজিট করুন: https://seelectronicspro.vercel.app/customer/login। কাস্টমার কেয়ার 09649355555
  ', '/customer/profile', false, '2026-08-23 08:57:15.251213+00');
INSERT INTO public."customerNotifications" VALUES ('5a1cfa59-f0d5-478f-afe2-bf0ef69a68f1', 'SECPPLB106', 'service_confirmation', 'প্রিয় গ্রাহক Mr. Khurshed Alam,
SE ELECTRONICS আপনার সার্ভিসিং এর অনুরোধটি গ্রহণ করা হয়েছে সার্ভিস আই ডি নং SE8603YSLQ, যে কোন তথ্যের জন্য 09649355555 সার্ভিস স্ট্যাটাস ট্র্যাক করতে লিঙ্কটিতে ক্লিক করুন
https://seelectronicspro.vercel.app/service-track?trackingId=SE8603YSLQ', '/customer/services/SE8603YSLQ', false, '2026-08-23 09:08:34.838509+00');
INSERT INTO public."customerNotifications" VALUES ('0435b285-3f15-4be1-9c13-e0ef02e641d0', 'SE8RM03D8C', 'staff_appointed', 'প্রিয় গ্রাহক Mss. Eva ,
আপনার SE53W3BWD7 প্যাকেজ টি হোম ইন্সটলেশন করার জন্য অফিসিয়াল ইন্সটল টিমকে নিযুক্ত করা হয়েছে। দ্রুত সময়ের মধ্যে ইন্সটল টিম আপনার সাথে যোগাযোগ করে সমাধান করবে। যে কোন তথ্যের জন্য 09649355555', '/customer/services/SE53W3BWD7', false, '2026-08-23 10:09:38.054452+00');
INSERT INTO public."customerNotifications" VALUES ('4e470e60-6435-4e70-bba6-dfda97da1f6a', 'SE8RM03D8C', 'service_completed', 'প্রিয় গ্রাহক Mss. Eva ,
আপনার IPS প্যাকেজ ইন্সটল সার্ভিস SE53W3BWD7, হাউস ওয়ারিং কাজ শেষ হয়েছে৷ অনুগ্রহ করে আপনার ফিডব্যাক এর জন্য ক্লিক করুন:
https://seelectronicspro.vercel.app/service-feedback?serviceId=SE53W3BWD7', '/customer/services/SE53W3BWD7', false, '2026-08-23 21:46:12.227755+00');
INSERT INTO public."customerNotifications" VALUES ('84877363-abbf-4269-90cb-0d3c910a12ef', 'SECPPLB106', 'staff_appointed', 'প্রিয় গ্রাহক Mr. Khurshed Alam,
আপনার SE8603YSLQ প্যাকেজ টি হোম ইন্সটলেশন করার জন্য অফিসিয়াল ইন্সটল টিমকে নিযুক্ত করা হয়েছে। দ্রুত সময়ের মধ্যে ইন্সটল টিম আপনার সাথে যোগাযোগ করে সমাধান করবে। যে কোন তথ্যের জন্য 09649355555', '/customer/services/SE8603YSLQ', false, '2026-08-24 03:54:12.49838+00');
INSERT INTO public."customerNotifications" VALUES ('5ec8df4f-a575-4b60-812c-0bf7e8081d13', 'SECPPLB106', 'service_confirmation', 'প্রিয় গ্রাহক Mr. Khurshed Alam,
SE ELECTRONICS আপনার সার্ভিসিং এর অনুরোধটি গ্রহণ করা হয়েছে সার্ভিস আই ডি নং SEVBNPTPFB, যে কোন তথ্যের জন্য 09649355555 সার্ভিস স্ট্যাটাস ট্র্যাক করতে লিঙ্কটিতে ক্লিক করুন
https://seelectronicspro.vercel.app/service-track?trackingId=SEVBNPTPFB', '/customer/services/SEVBNPTPFB', false, '2026-08-25 22:10:37.987042+00');
INSERT INTO public."customerNotifications" VALUES ('293c0ba8-4847-4435-b092-feb88b63a778', 'SEKW8W38E0', 'service_completed', 'প্রিয় গ্রাহক Nazmul Motin,
আপনার IPS প্যাকেজ ইন্সটল সার্ভিস SETM13C0HL, হাউস ওয়ারিং কাজ শেষ হয়েছে৷ অনুগ্রহ করে আপনার ফিডব্যাক এর জন্য ক্লিক করুন:
https://seelectronicspro.vercel.app/service-feedback?serviceId=SETM13C0HL', '/customer/services/SETM13C0HL', false, '2026-08-26 07:05:58.546656+00');
INSERT INTO public."customerNotifications" VALUES ('e3b9a8fd-0927-44d8-bd72-61722a5afe7d', 'SEKW8W38E0', 'service_completed', 'প্রিয় গ্রাহক Nazmul Motin,
আপনার IPS প্যাকেজ ইন্সটল সার্ভিস SETM13C0HL, হাউস ওয়ারিং কাজ শেষ হয়েছে৷ অনুগ্রহ করে আপনার ফিডব্যাক এর জন্য ক্লিক করুন:
https://seelectronicspro.vercel.app/service-feedback?serviceId=SETM13C0HL', '/customer/services/SETM13C0HL', false, '2026-08-26 07:08:54.770774+00');
INSERT INTO public."customerNotifications" VALUES ('1f35a317-d6bd-4678-9757-592e4383a266', 'SEXM6JA1VL', 'service_completed', 'প্রিয় গ্রাহক MD. RAKIB HUSSEN,
আপনার IPS প্যাকেজ ইন্সটল সার্ভিস SEBCBQY8QO, হাউস ওয়ারিং কাজ শেষ হয়েছে৷ অনুগ্রহ করে আপনার ফিডব্যাক এর জন্য ক্লিক করুন:
https://seelectronicspro.vercel.app/service-feedback?serviceId=SEBCBQY8QO', '/customer/services/SEBCBQY8QO', false, '2026-08-27 07:17:58.412308+00');
INSERT INTO public."customerNotifications" VALUES ('7dc1e883-d97d-4ff8-bf90-4e48638caa08', 'SEWCFAWBYM', 'service_confirmation', 'প্রিয় গ্রাহক Shabuddin Mahamud,
SE ELECTRONICS আপনার সার্ভিসিং এর অনুরোধটি গ্রহণ করা হয়েছে সার্ভিস আই ডি নং SE20NGXGCS, যে কোন তথ্যের জন্য 09649355555 সার্ভিস স্ট্যাটাস ট্র্যাক করতে লিঙ্কটিতে ক্লিক করুন
https://seelectronicspro.vercel.app/service-track?trackingId=SE20NGXGCS', '/customer/services/SE20NGXGCS', false, '2026-08-28 08:56:32.530408+00');
INSERT INTO public."customerNotifications" VALUES ('ce516954-1c22-4b41-a0c1-860edd0bd8bb', 'SERLH0RFSE', 'customer-invoice', 'স্বাগতম প্রিয় গ্রাহক MD Robel Ahmed, 
এস ই ইলেকট্রনিকস থেকে পন্য ক্রয় করার জন্য আপনাকে ধন্যবাদ। আপনার একটি প্রোফাইল তৈরি হয়েছে। কাস্টমার আই ডি : SERLH0RFSE এবং ইনভয়েস নম্বর: 11824997 দিয়ে লগিং করতে লিংকটি ক্লিক করুন। পন্যের তথ্য , সার্ভিস যাবতীয় সকল কিছু  দেখতে লগিং করে হোম পেইজে রাখুন।

লগইন করে ইনভয়েস ডাউনলোড করতে ভিজিট করুন: https://seelectronicspro.vercel.app/customer/login। কাস্টমার কেয়ার 09649355555
  ', '/customer/profile', false, '2026-08-28 13:51:03.359339+00');
INSERT INTO public."customerNotifications" VALUES ('1095407c-cfda-45cf-9507-31dc44bcc681', 'SEWCFAWBYM', 'service_confirmation', 'প্রিয় গ্রাহক Shabuddin Mahamud,
SE ELECTRONICS আপনার সার্ভিসিং এর অনুরোধটি গ্রহণ করা হয়েছে সার্ভিস আই ডি নং SECC9XPIHN, যে কোন তথ্যের জন্য 09649355555 সার্ভিস স্ট্যাটাস ট্র্যাক করতে লিঙ্কটিতে ক্লিক করুন
https://seelectronicspro.vercel.app/service-track?trackingId=SECC9XPIHN', '/customer/services/SECC9XPIHN', true, '2026-08-27 07:19:01.391042+00');
INSERT INTO public."customerNotifications" VALUES ('da39b0b0-fec5-481d-aec7-28dd03578cf3', 'SEWCFAWBYM', 'staff_appointed', 'প্রিয় গ্রাহক Shabuddin Mahamud, 
আপনার SECC9XPIHN সার্ভিসটি সমাধানের জন্য সার্ভিস টিম নিয়োগ করা হয়েছে। বিস্তারিত জানতে অনুগ্রহ করে আপনার ড্যাশবোর্ড চেক করুন।', '/customer/services/SECC9XPIHN', true, '2026-08-27 07:19:38.130708+00');
INSERT INTO public."customerNotifications" VALUES ('e659050a-094a-461e-a2fb-344526dc5b77', 'SEULZI14CJ', 'customer-invoice', 'স্বাগতম প্রিয় গ্রাহক Mokhfur Chowdhury, 
এস ই ইলেকট্রনিকস থেকে পন্য ক্রয় করার জন্য আপনাকে ধন্যবাদ। আপনার একটি প্রোফাইল তৈরি হয়েছে। কাস্টমার আই ডি : SEULZI14CJ এবং ইনভয়েস নম্বর: 91049571 দিয়ে লগিং করতে লিংকটি ক্লিক করুন। পন্যের তথ্য , সার্ভিস যাবতীয় সকল কিছু  দেখতে লগিং করে হোম পেইজে রাখুন।

লগইন করে ইনভয়েস ডাউনলোড করতে ভিজিট করুন: https://seelectronicspro.vercel.app/customer/login। কাস্টমার কেয়ার 09649355555
  ', '/customer/profile', false, '2026-08-30 09:59:31.324023+00');
INSERT INTO public."customerNotifications" VALUES ('c8856489-a70b-42be-83bc-f78a24a0ab22', 'SED0JJIDIR', 'customer-invoice', 'স্বাগতম প্রিয় গ্রাহক MD JOSHIM , 
এস ই ইলেকট্রনিকস থেকে পন্য ক্রয় করার জন্য আপনাকে ধন্যবাদ। আপনার একটি প্রোফাইল তৈরি হয়েছে। কাস্টমার আই ডি : SED0JJIDIR এবং ইনভয়েস নম্বর: 93034130 দিয়ে লগিং করতে লিংকটি ক্লিক করুন। পন্যের তথ্য , সার্ভিস যাবতীয় সকল কিছু  দেখতে লগিং করে হোম পেইজে রাখুন।

লগইন করে ইনভয়েস ডাউনলোড করতে ভিজিট করুন: https://seelectronicspro.vercel.app/customer/login। কাস্টমার কেয়ার 09649355555
  ', '/customer/profile', false, '2026-08-30 17:26:21.48614+00');
INSERT INTO public."customerNotifications" VALUES ('6cce7dad-1a0c-4366-b986-f1808a6cec0a', 'SECPPLB106', 'service_confirmation', 'প্রিয় গ্রাহক Mr. Khurshed Alam,
SE ELECTRONICS আপনার সার্ভিসিং এর অনুরোধটি গ্রহণ করা হয়েছে সার্ভিস আই ডি নং SEZO9YBPE3, যে কোন তথ্যের জন্য 09649355555 সার্ভিস স্ট্যাটাস ট্র্যাক করতে লিঙ্কটিতে ক্লিক করুন
https://seelectronicspro.vercel.app/service-track?trackingId=SEZO9YBPE3', '/customer/services/SEZO9YBPE3', false, '2026-08-30 20:24:31.369202+00');
INSERT INTO public."customerNotifications" VALUES ('bd7b72b3-120f-4852-8cb6-0bc2a90dc953', 'SECPPLB106', 'staff_appointed', 'প্রিয় গ্রাহক Mr. Khurshed Alam, 
আপনার SEZO9YBPE3 সার্ভিসটি সমাধানের জন্য সার্ভিস টিম নিয়োগ করা হয়েছে। বিস্তারিত জানতে অনুগ্রহ করে আপনার ড্যাশবোর্ড চেক করুন।', '/customer/services/SEZO9YBPE3', false, '2026-08-30 20:42:40.668674+00');
INSERT INTO public."customerNotifications" VALUES ('f42dab8d-2632-498d-94e2-18f62807762a', 'SECPPLB106', 'service_completed', 'প্রিয় গ্রাহক Mr. Khurshed Alam,
আপনার সার্ভিস SEZO9YBPE3 সার্ভিসটি সমাধান করা হয়েছে। অনুগ্রহ করে আপনার ফিডব্যাক এর জন্য ক্লিক করুন:
https://seelectronicspro.vercel.app/service-feedback?serviceId=SEZO9YBPE3', '/customer/services/SEZO9YBPE3', false, '2026-08-30 20:44:13.083822+00');
INSERT INTO public."customerNotifications" VALUES ('7fc861ba-ba29-4ef5-95ba-d858b6aaf1e3', 'SERLH0RFSE', 'customer-invoice', 'স্বাগতম প্রিয় গ্রাহক MD Robel Ahmed, 
এস ই ইলেকট্রনিকস থেকে পন্য ক্রয় করার জন্য আপনাকে ধন্যবাদ। আপনার একটি প্রোফাইল তৈরি হয়েছে। কাস্টমার আই ডি : SERLH0RFSE এবং ইনভয়েস নম্বর: 11824997 দিয়ে লগিং করতে লিংকটি ক্লিক করুন। পন্যের তথ্য , সার্ভিস যাবতীয় সকল কিছু  দেখতে লগিং করে হোম পেইজে রাখুন।

লগইন করে ইনভয়েস ডাউনলোড করতে ভিজিট করুন: https://seelectronicspro.vercel.app/customer/login। কাস্টমার কেয়ার 09649355555
  ', '/customer/profile', false, '2026-08-31 18:07:03.403882+00');
INSERT INTO public."customerNotifications" VALUES ('54ca0891-2f5f-4f19-83c7-9a9f1b660584', 'SEWCFAWBYM', 'service_confirmation', 'প্রিয় গ্রাহক Shabuddin Mahamud,
SE ELECTRONICS আপনার সার্ভিসিং এর অনুরোধটি গ্রহণ করা হয়েছে সার্ভিস আই ডি নং SEDPXID0U5, যে কোন তথ্যের জন্য 09649355555 সার্ভিস স্ট্যাটাস ট্র্যাক করতে লিঙ্কটিতে ক্লিক করুন
https://seelectronicspro.vercel.app/service-track?trackingId=SEDPXID0U5', '/customer/services/SEDPXID0U5', false, '2026-08-31 19:49:55.230881+00');
INSERT INTO public."customerNotifications" VALUES ('f42bbfaf-a7b8-4654-bf5f-921a343aaa84', 'SEWCFAWBYM', 'staff_appointed', 'প্রিয় গ্রাহক Shabuddin Mahamud,
আপনার SEHRUPRJWM প্যাকেজ টি হোম ইন্সটলেশন করার জন্য অফিসিয়াল ইন্সটল টিমকে নিযুক্ত করা হয়েছে। দ্রুত সময়ের মধ্যে ইন্সটল টিম আপনার সাথে যোগাযোগ করে সমাধান করবে। যে কোন তথ্যের জন্য 09649355555', '/customer/services/SEHRUPRJWM', true, '2026-08-31 20:18:11.156421+00');
INSERT INTO public."customerNotifications" VALUES ('b2280513-a9dd-4339-9c27-af96fd9a5382', 'SEWCFAWBYM', 'staff_appointed', 'প্রিয় গ্রাহক Shabuddin Mahamud,
আপনার SEHRUPRJWM প্যাকেজ টি হোম ইন্সটলেশন করার জন্য অফিসিয়াল ইন্সটল টিমকে নিযুক্ত করা হয়েছে। দ্রুত সময়ের মধ্যে ইন্সটল টিম আপনার সাথে যোগাযোগ করে সমাধান করবে। যে কোন তথ্যের জন্য 09649355555', '/customer/services/SEHRUPRJWM', true, '2026-08-31 20:16:52.601708+00');
INSERT INTO public."customerNotifications" VALUES ('36948986-2e5a-403c-a724-1e3ce6b5a68b', 'SEWCFAWBYM', 'staff_appointed', 'প্রিয় গ্রাহক Shabuddin Mahamud, 
আপনার SE72GC7OCZ সার্ভিসটি সমাধানের জন্য সার্ভিস টিম নিয়োগ করা হয়েছে। বিস্তারিত জানতে অনুগ্রহ করে আপনার ড্যাশবোর্ড চেক করুন।', '/customer/services/SE72GC7OCZ', true, '2026-08-31 20:15:34.009249+00');
INSERT INTO public."customerNotifications" VALUES ('8327bc47-5685-4da4-9159-b39ad0d4013c', 'SEWCFAWBYM', 'service_confirmation', 'প্রিয় গ্রাহক Shabuddin Mahamud,
SE ELECTRONICS আপনার সার্ভিসিং এর অনুরোধটি গ্রহণ করা হয়েছে সার্ভিস আই ডি নং SEHRUPRJWM, যে কোন তথ্যের জন্য 09649355555 সার্ভিস স্ট্যাটাস ট্র্যাক করতে লিঙ্কটিতে ক্লিক করুন
https://seelectronicspro.vercel.app/service-track?trackingId=SEHRUPRJWM', '/customer/services/SEHRUPRJWM', true, '2026-08-31 20:14:07.651005+00');
INSERT INTO public."customerNotifications" VALUES ('888b2db2-aeab-41e2-988a-1eda76724236', 'SEWCFAWBYM', 'service_confirmation', 'প্রিয় গ্রাহক Shabuddin Mahamud,
SE ELECTRONICS আপনার সার্ভিসিং এর অনুরোধটি গ্রহণ করা হয়েছে সার্ভিস আই ডি নং SE72GC7OCZ, যে কোন তথ্যের জন্য 09649355555 সার্ভিস স্ট্যাটাস ট্র্যাক করতে লিঙ্কটিতে ক্লিক করুন
https://seelectronicspro.vercel.app/service-track?trackingId=SE72GC7OCZ', '/customer/services/SE72GC7OCZ', true, '2026-08-31 20:13:36.268121+00');
INSERT INTO public."customerNotifications" VALUES ('8e585ecc-3fd2-4038-bd91-016d45ca19d1', 'SEULZI14CJ', 'service_confirmation', 'প্রিয় গ্রাহক Mokhfur Chowdhury,
SE ELECTRONICS আপনার আই পি এস  হোম ইন্সটল এর অনুরোধটি গ্রহণ করা হয়েছে ইন্সটল আই ডি নং SE3L24CRRM, যে কোন তথ্যের জন্য 09649355555 সার্ভিস স্ট্যাটাস ট্র্যাক করতে লিঙ্কটিতে ক্লিক করুন
https://seelectronicspro.vercel.app/service-track?trackingId=SE3L24CRRM', '/customer/services/SE3L24CRRM', false, '2026-09-02 04:06:08.753236+00');
INSERT INTO public."customerNotifications" VALUES ('72fe68a6-1137-4bb2-ae0d-bbc02dccae8a', 'SEULZI14CJ', 'staff_appointed', 'প্রিয় গ্রাহক Mokhfur Chowdhury,
আপনার SE3L24CRRM প্যাকেজ টি হোম ইন্সটলেশন করার জন্য অফিসিয়াল ইন্সটল টিমকে নিযুক্ত করা হয়েছে। দ্রুত সময়ের মধ্যে ইন্সটল টিম আপনার সাথে যোগাযোগ করে সমাধান করবে। যে কোন তথ্যের জন্য 09649355555', '/customer/services/SE3L24CRRM', false, '2026-09-02 05:14:22.86838+00');
INSERT INTO public."customerNotifications" VALUES ('df686a1c-513a-44d8-acf2-5f3f0d706850', 'SEP728Z15J', 'referral_bonus', 'আপনার রেফারেলে Talha Khan ক্রয় করেছেন। আপনি ৳200 রেফারেল বোনাস পেয়েছেন!', '/customer/referral', true, '2026-07-14 21:10:10.809606+00');
INSERT INTO public."customerNotifications" VALUES ('ccee5530-2fb8-490d-91e0-e3fa1e1404b5', 'SEVCHY8E8C', 'customer-invoice', 'স্বাগতম প্রিয় গ্রাহক Md nayem, 
এস ই ইলেকট্রনিকস থেকে পন্য ক্রয় করার জন্য আপনাকে ধন্যবাদ। আপনার একটি প্রোফাইল তৈরি হয়েছে। কাস্টমার আই ডি : SEVCHY8E8C এবং ইনভয়েস নম্বর: 06407261 দিয়ে লগিং করতে লিংকটি ক্লিক করুন। পন্যের তথ্য , সার্ভিস যাবতীয় সকল কিছু  দেখতে লগিং করে হোম পেইজে রাখুন।

লগইন করে ইনভয়েস ডাউনলোড করতে ভিজিট করুন: https://seelectronicspro.vercel.app/customer/login। কাস্টমার কেয়ার 09649355555
  ', '/customer/profile', false, '2026-09-06 16:46:32.811519+00');


--
-- Data for Name: staffs; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.staffs VALUES ('2b169242-13d4-4e05-a16f-96bbd54dd45e', 'SEMQS5YF41', '01855684869', '$2b$10$8ehG/uU35xYsHfHxwHE36uWItjuk0ZvJlBBP07egqKilLgFrSAIAy', 'মোহাম্মদ আলী', 'মোঃ খোয়াজ আলী', '01855684869', 'কদমতলী', 'সিলেট', 'দক্ষিণ সুরমা', 'দক্ষিন সুরমা ', 'টেটিয়ারচর', 'সুনামগঞ্জ', 'ছাতক', 'চরমহল্লা বাজার', 'media/staff/SEMQS5YF41/profile_a3d41425-0eef-4a90-b7b3-e592c46275f2.webp', 'media/staff/SEMQS5YF41/nid-front_7d74d237-ada0-453e-9a99-863f044c0faf.webp', 'media/staff/SEMQS5YF41/nid-back_5af87105-2650-4b9b-ad4d-7e2e46e329dc.webp', NULL, NULL, false, 3, true, 3, 'electrician', true, true, true, 0.00, 0, 0, 0, 'bkash', '01855684869', NULL, '[]', 'public_form', true, true, 'immediate', false, '42.0.7.76', 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Mobile Safari/537.36', '2026-05-04 11:41:16.823654+00', '2026-05-04 17:34:34.886+00', 0, 0);
INSERT INTO public.staffs VALUES ('651062b9-00a2-4dca-afb9-bf31ba9f8e5d', 'SEN5Y2N6WT', '01320904269', '$2b$10$pH/XQEsE.DtOhDDht/RNF.GyA7FyJGn8RXH9uT5PN3RNYIJiancxe', 'আল আমিন আহমেদ ', 'ফয়জুল আহমেদ ', '01320904269', 'হাউজিং এস্টেট  1নং রোড আম্বর খানা', 'সিলেট', 'এয়ারপোর্ট', 'সিলেট সদর', 'রাজাপুর ', 'সুনামগঞ্জ', 'ছাতক', 'কালারুকা ', 'media/staff/SEN5Y2N6WT/profile_7e04b8ee-e5f3-4a98-a372-df50c60bd985.webp', 'media/staff/SEN5Y2N6WT/nid-front_e34d8cda-92a5-4fe8-956a-082ad8467711.webp', 'media/staff/SEN5Y2N6WT/nid-back_53eca887-7e21-4837-ab6d-580e886cc799.webp', NULL, NULL, false, 5, true, 5, 'electrician', true, true, true, 0.00, 0, 0, 0, 'bkash', '01320904269', NULL, '[]', 'public_form', true, true, 'immediate', false, '103.49.200.34', 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Mobile Safari/537.36', '2026-05-02 15:41:46.929287+00', '2026-05-02 16:58:12.446+00', 0, 0);
INSERT INTO public.staffs VALUES ('d832b39e-8030-4b98-b44b-6748b71ab0be', 'SEBUFWV5BI', NULL, NULL, 'Durjoy Roy', 'Jotish Roy', '01943799513', 'Modina market ', 'সিলেট', 'জালালাবাদ', 'Sylhet sadar', 'Tahirpur', 'সুনামগঞ্জ', 'তাহিরপুর', 'Tahirpur ', 'media/staff/SEBUFWV5BI/profile_1d6e5c07-c66c-4b97-b403-ed63bb8eba94.webp', 'media/staff/SEBUFWV5BI/nid-front_b91fde4b-2381-4412-a6ed-24d1b6d46201.webp', 'media/staff/SEBUFWV5BI/nid-back_c8abae41-ddb4-41fb-adcb-2eecb352dfac.webp', NULL, NULL, true, 1, true, 5, 'electrician', false, true, false, 0.00, 0, 0, 0, 'bkash', '01943799513', NULL, '[]', 'public_form', true, true, 'immediate', false, '27.147.224.90', 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/151.0.0.0 Mobile Safari/537.36', '2026-08-10 16:12:55.846648+00', '2026-08-10 16:12:55.846648+00', 0, 0);
INSERT INTO public.staffs VALUES ('6a9b68ac-32a5-4a87-b38b-686bbfe7429d', 'SEQQTONWQD', 'Shabuddin', '$2b$10$DddfqHI0gU4Lmmdlq8Xj.uYev1sb1RXbfnL6dEMvGZFRtE4oTM9.m', 'Anuar Ahmed', 'মৃত মুকিম উল্লাহ ', '01310673600', 'Sylhet', 'গোপালগঞ্জ', 'মুকসুদপুর', 'সিলেট সদর ', 'বাদাম বাগিচা ২ নং রোড ১৩/২ ', 'গোপালগঞ্জ', 'কাশিয়ানী', 'সিলেট সদর ', 'media/staff/SEQQTONWQD/profile_59a38fe6-67ba-4a4d-bad1-784d2fa91240.webp', 'media/staff/SEQQTONWQD/nid-front_9d193142-53dd-400a-a0d8-3c9443ea3280.webp', 'media/staff/SEQQTONWQD/nid-back_c581fc1c-e71b-4eaf-abdc-57b566c57717.webp', NULL, NULL, true, 2, false, 0, 'technician', true, true, true, 0.00, 0, 0, 0, 'bkash', '01322247771', NULL, '[]', 'dashboard', true, true, 'immediate', false, NULL, NULL, '2026-07-27 19:54:00.62091+00', '2026-08-28 08:53:39.797+00', 0, 0);
INSERT INTO public.staffs VALUES ('c7f9c300-9a09-45e3-b864-1841948a0f0c', 'SE2L0OQUBT', '01959983858', '$2b$10$o9ooqzxfkbYCKKF2jtYtYek3bFh17kWrA/Oh1rly9g/9Olan6h90W', 'MD HALIM MIA', 'MD SHOHEL AHMED', '01312954819', 'Badambagicha Rd No. 2 Road', 'সিলেট', 'এয়ারপোর্ট', 'SYLHET SADAR', 'TAHER POR BADAGHAT BAZAR ', 'সুনামগঞ্জ', 'সুনামগঞ্জ সদর', 'TAHER POR', 'media/staff/SE2L0OQUBT/profile_94b07806-af75-44aa-b9c7-9f9cd2f071f7.webp', 'media/staff/SE2L0OQUBT/nid-front_3cd7c205-56bc-489f-abd3-71d8c90aee6f.webp', 'media/staff/SE2L0OQUBT/nid-back_3cdf4689-31ca-45ef-9c86-7576899d41b4.webp', NULL, NULL, true, 3, false, 0, 'technician', true, true, true, 0.00, 4, 3, 1, 'nagad', '01312954819', NULL, '[]', 'dashboard', true, true, 'immediate', false, NULL, NULL, '2026-05-18 06:00:11.855044+00', '2026-09-03 07:12:18.469+00', 0, 2);
INSERT INTO public.staffs VALUES ('73ab3a93-e54c-46ec-95e8-7dfbccae2970', 'SEQ2FBJ75J', '01312954819', '$2b$10$tWDxtGFcDv3B/hOislV74e5eKsN7tKDRfS7GJ5evXQNonUtEBC5si', 'HALIM MIA', 'MD SHOHEL MIA', '01312954819', 'BADAM BAGICHA JAME MOSHJID COYATAR', 'সিলেট', 'এয়ারপোর্ট', 'Sylhet', 'BADA GHAT BAZER', 'সুনামগঞ্জ', 'তাহিরপুর', 'তাহের পুর', 'media/staff/SEQ2FBJ75J/profile_3d04a7c9-9c84-44f4-8774-ef0560522a49.webp', 'media/staff/SEQ2FBJ75J/nid-front_a669caa9-af39-48df-8219-485d375b8894.webp', 'media/staff/SEQ2FBJ75J/nid-back_c8cc555d-a0b6-40c4-8a5f-057dc226be9e.webp', NULL, NULL, false, 0, true, 3, 'electrician', true, true, true, 0.00, 15, 15, 0, 'nagad', '01312954819', NULL, '[]', 'dashboard', true, true, 'immediate', false, NULL, NULL, '2026-04-18 08:55:02.215065+00', '2026-09-02 10:15:40.654+00', 0, 0);
INSERT INTO public.staffs VALUES ('52ccf07d-55c4-4fc9-91a5-f352b22a033b', 'SETJ1RPUO8', '01310673600', '$2b$10$MckhTZ/9YQaUiY7wa.mJwu73I4oOHvbhlJF6fGZ9bXEAurazqbuc.', 'Shabuddin Mahamud', 'আহিল মাহমুদ ', '01310673600', 'Badambagicha Rd No. 4', 'সিলেট', 'এয়ারপোর্ট', 'সিলেট সদর ', 'Badambagicha Rd No. 4', 'সিলেট', 'এয়ারপোর্ট', 'সিলেট সদর ', 'media/staff/SETJ1RPUO8/profile_d1656259-91c4-4960-af5e-da557d156dcd.webp', 'media/staff/SETJ1RPUO8/nid-front_bae3c8bd-ad43-4fbc-8de9-2c458b515896.webp', 'media/staff/SETJ1RPUO8/nid-back_73d8f81c-e4dd-4c6e-af79-3786757e26c4.webp', NULL, NULL, true, 10, false, 0, 'technician', true, true, true, 0.00, 0, 0, 0, 'bkash', '01310673600', NULL, '[]', 'dashboard', true, true, 'immediate', false, NULL, NULL, '2026-04-17 19:27:56.853539+00', '2026-09-03 06:57:57.495+00', 0, 0);


--
-- Data for Name: services; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.services VALUES ('969037be-7e68-41af-a3dc-d63635597d95', 'SEPVF9ZVSB', 'SEWCFAWBYM', 'Shabuddin Mahamud', '01310673600', 'Badambagicha Rd No. 4 Sylhet ', NULL, NULL, NULL, 'SE2L0OQUBT', NULL, 'MD HALIM MIA', '01312954819', '{"resolved":true,"explanation":"কোন সমস্যা ছিল না","travelCost":150,"totalCost":0}', 'repair', 'ips', 'SEPI1050 VA DSP SINE WAVE IPS ', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'completed', 'dashboard', 'service_center', true, NULL, NULL, '2026-06-28 23:26:28.381129+00', '2026-08-04 10:52:37.98+00');
INSERT INTO public.services VALUES ('a2b83db2-8dad-4d18-bfc2-45a0f88c53cf', 'SE1IMT8LUF', 'SERY4IEAOT', 'MD AMINUR ROHOMAN', '01716563822', 'শামীমাবাদ,মজুমদারপাড়া ৩ রোড সিলেট', NULL, NULL, NULL, 'SEQ2FBJ75J', NULL, 'HALIM MIA', '01312954819', NULL, 'install', 'ips', 'SEPI-1050 VA DSP SINE WAVE IPS 2.5 V', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'completed', 'dashboard', 'service_center', true, NULL, NULL, '2026-04-21 10:32:25.257702+00', '2026-04-21 20:49:21.861+00');
INSERT INTO public.services VALUES ('0fb577e4-49e4-4e00-b17a-d879a0a02b85', 'SE3NL80LG0', 'SEYSZ0ELKG', 'মো বিপ্লব তালুকদার', '01732599441', 'শামীমাবাদ,মজুমদারপাড়া ৩রোড', NULL, NULL, NULL, 'SEQ2FBJ75J', NULL, 'HALIM MIA', '01312954819', '{"resolved":true,"explanation":"কাস্টমারে দিছে থ্রি পিন বোড আর থ্রি পিন ফ্ল্যাগ আর তার দিছে ","travelCost":200,"totalCost":0}', 'install', 'ips', 'SEPI 1050 VA DSP SINE WAVE  IPS ', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'completed', 'dashboard', 'staff_member', true, NULL, NULL, '2026-04-18 08:48:27.732081+00', '2026-04-18 16:29:50.065+00');
INSERT INTO public.services VALUES ('e853a729-e9a7-4065-b577-3c5ce881eaab', 'SEHWH20ZUH', 'SE3TLRL5MG', 'jamiatul khair al islamiya madrasah.', '01772133687', 'Pir''s Bazar Chowdhury Para Boteswar Sylhet', NULL, NULL, NULL, 'SEQ2FBJ75J', NULL, 'HALIM MIA', '01312954819', NULL, 'install', 'ips', 'SEP 2 KVA 24 V DSP SINE WAVE IPS', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'completed', 'dashboard', 'service_center', true, NULL, NULL, '2026-05-16 07:47:01.193465+00', '2026-05-17 07:18:04.349+00');
INSERT INTO public.services VALUES ('c4030f95-876e-4b4d-95a8-2fdd90250f86', 'SE81XT2D1P', 'SERBL8II5B', 'MD MASUD RANA', '01627562997', 'SHAMIMABAD MOJUMDAR PARA SYLHET', NULL, NULL, NULL, 'SEQ2FBJ75J', NULL, 'HALIM MIA', '01312954819', '{"resolved":true,"explanation":"৭ ফুট তার ১ টি ১৩ এম্পিয়ার থ্রি প্লাজ পাওয়ার বোর্ড এর তলা একটা","travelCost":200,"totalCost":200}', 'install', 'ips', 'SEPI 1050 VA DSP SINE WAVE IPS', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'completed', 'dashboard', 'staff_member', true, NULL, NULL, '2026-05-01 15:08:15.82888+00', '2026-05-01 20:21:22.063+00');
INSERT INTO public.services VALUES ('8dfba1cb-f3d7-42b8-9871-9470f0636b90', 'SEP6UIPHZD', 'SE34VSHIB2', 'MD ABDUL MOTIN ', '01716387242', 'SHAMIMABAD MOHILA COL SYLHET ', NULL, NULL, NULL, NULL, NULL, 'MD ALAMIN', '01320904269', NULL, 'install', 'ips', 'SEPI 1250 VA DSP IPS ', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'completed', 'dashboard', 'service_center', true, NULL, NULL, '2026-04-23 12:09:49.76725+00', '2026-04-24 16:15:21.392+00');
INSERT INTO public.services VALUES ('eb4bf1be-4b9d-4491-9ba7-23d3152ee48b', 'SE2OP76BL6', 'SEP8BEVJJJ', 'MD SHIEKH RAFI', '01851344473', 'Agroni 96 Londoni Road Sylhit', NULL, NULL, NULL, 'SEQ2FBJ75J', NULL, 'HALIM MIA', '01312954819', '{"resolved":true,"explanation":"কাস্টমার সব দিয়েছে আমি ফিটিং করে দিয়েছি","travelCost":300,"totalCost":0}', 'install', 'ips', 'SEPI-1050 VA DSP SINE WAVW IPS', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'completed', 'dashboard', 'staff_member', true, NULL, NULL, '2026-04-22 20:34:54.873483+00', '2026-04-27 19:04:07.172+00');
INSERT INTO public.services VALUES ('39948f7d-80a1-42b9-994c-9b4710416cd2', 'SEXTF233UC', 'SED31QHDIM', 'MD ABDUL MOJID', '01716465658', 'DAROSSALAM  MADRASHA ROD KHASTOBIR', NULL, NULL, NULL, NULL, NULL, 'MD ALAMIN', '01320904269', NULL, 'install', 'battery', 'RIMSO 200 AH T BATTERY', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'completed', 'dashboard', 'service_center', true, NULL, NULL, '2026-04-24 14:11:24.216163+00', '2026-04-30 16:44:04.873+00');
INSERT INTO public.services VALUES ('f1b94153-7155-4152-b13e-9915ad3e3889', 'SEDMVUT0WI', 'SE3TLRL5MG', 'jamiatul khair al islamiya madrasah.77000 ', '01772133687', 'Pir''s Bazar Chowdhury Para Boteswar Sylhet', NULL, NULL, NULL, 'SE2L0OQUBT', NULL, 'MD HALIM MIA', '01312954819', NULL, 'repair', 'ips', 'SEP 2 KVA 24 V DSP SINE WAVE IPS', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'completed', 'dashboard', 'service_center', true, NULL, NULL, '2026-05-18 06:19:00.029378+00', '2026-05-21 07:24:21.978+00');
INSERT INTO public.services VALUES ('bfa80bed-07b7-4577-b6e1-4d0c5fd21e5c', 'SESPUXV13A', 'SETBR5KC3P', 'MD MAMUN BAI ', '01911199796', 'Block E, Road 6, Spring Tower,  Uposhahor, Sylhet', NULL, NULL, NULL, 'SEQ2FBJ75J', NULL, 'HALIM MIA', '01312954819', '{"resolved":true,"explanation":"13 এম্পিয়ার বোর্ড একটা  13 এম্পিয়ার ফ্ল্যাগ একটা তার 30 ফুড ","travelCost":300,"totalCost":900}', 'install', 'ips', 'SEPI 650 VA', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'completed', 'dashboard', 'staff_member', true, NULL, NULL, '2026-05-02 14:10:10.794945+00', '2026-05-04 11:15:20.948+00');
INSERT INTO public.services VALUES ('0b31ed4d-66a8-4edd-b60b-392533492c8e', 'SEO6J6VL6J', 'SEHBGMI4B4', 'MD JOSHIM ', '01710972946', 'Sherpur  chargers  brahmanbaria ', NULL, NULL, NULL, 'SEQ2FBJ75J', NULL, 'HALIM MIA', '01312954819', '{"resolved":true,"explanation":"13 এম্পিয়ার বোর্ড একটা 13 এম্পিয়ার ফ্ল্যাগ একটা তার 50 ফুড ","travelCost":1700,"totalCost":1370}', 'install', 'ips', 'SEPI 1050 VA DSP SINE WAVE IPS', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'completed', 'dashboard', 'staff_member', true, NULL, NULL, '2026-05-04 14:21:51.306941+00', '2026-05-06 04:47:07.889+00');
INSERT INTO public.services VALUES ('5da8dfd3-14c7-4908-ac1c-ed86a475d236', 'SEBCBQY8QO', 'SEXM6JA1VL', 'MD. RAKIB HUSSEN', '01304761002', 'Shobid bazar  Sylhet ', NULL, NULL, NULL, 'SEQ2FBJ75J', NULL, 'HALIM MIA', '01312954819', '{"resolved":true,"explanation":"company diyese tar power broad","travelCost":120,"totalCost":520}', 'install', 'ips', 'SEP 500 VA SQ', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'completed', 'dashboard', 'service_center', true, NULL, NULL, '2026-08-08 09:28:59.149389+00', '2026-08-27 07:17:57.155+00');
INSERT INTO public.services VALUES ('88208348-da2b-44c1-8137-dad7decc129c', 'SESFYI1YQG', NULL, 'Talha Khan', '01310673600', 'Badambagicha Rd No. 2 Sylhet ', NULL, NULL, NULL, NULL, NULL, 'talha', '322342342345', '{"resolved":true,"explanation":"আই পি এস এর সার্কিট এর মোস্ফেট বার্ন হয়েছে১৬ টা আই সি নষ্ট হয়ে গেছে সব চেঞ্জ করা হয়েছে এখন ঠিক আছে","travelCost":250,"totalCost":1500}', 'repair', 'ips', 'dawer4e23', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'completed', 'dashboard', 'service_center', true, NULL, NULL, '2026-07-20 16:54:41.867058+00', '2026-07-21 14:49:04.44+00');
INSERT INTO public.services VALUES ('6136a877-0a82-40df-b9dc-5d7404c89fe8', 'SETSEA3JAO', 'SENPBR9M2A', 'MD HADI', '01717020773', 'PIRMOHOLLA MOSHJID GOLLI 148/38 MAHAMUD VILA', NULL, NULL, NULL, 'SE2L0OQUBT', NULL, 'MD HALIM MIA', '01312954819', '{"resolved":true,"explanation":"আই পি এস এ কোন সমস্যা ছিল না সব ওকে ব্যাটারি সমস্যা ","travelCost":100,"totalCost":0}', 'repair', 'ips', 'SEPI 1050 VA DSPx SINE WABVE IPS', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'completed', 'dashboard', 'service_center', true, NULL, NULL, '2026-08-11 04:10:57.153094+00', '2026-08-12 10:55:22.515+00');
INSERT INTO public.services VALUES ('84ce7ad8-d753-455b-8574-5558a6316472', 'SEFXHSDOCW', 'SE5850EG4Y', 'Majida Chowdhury', '01710932413', 'Jalalabad 37. House No. 37/2 Mannan Villa Sylhet', NULL, NULL, NULL, 'SEQ2FBJ75J', NULL, 'HALIM MIA', '01312954819', '{"resolved":true,"explanation":"50 ফুট কোম্পানী দিয়েছে ","travelCost":130,"totalCost":950}', 'install', 'ips', 'SEPI 650 VA DSP SINE WAVE IPS', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'completed', 'dashboard', 'service_center', true, NULL, NULL, '2026-07-21 07:01:17.493319+00', '2026-08-14 09:22:05.654+00');
INSERT INTO public.services VALUES ('d6ebe681-2f8e-4a31-8abc-b31cf6a42479', 'SECU0EX66G', 'SE34VSHIB2', 'MD ABDUL MOTIN ', '01716387242', 'SHAMIMABAD MOHILA COL SYLHET ', NULL, NULL, NULL, 'SE2L0OQUBT', NULL, 'MD HALIM MIA', '01312954819', '{"resolved":true,"explanation":"আই পি এস এ কোন সমস্যা ছিলনা ওভারলোড সমস্যা ছিল কাস্টমারের বাসায় ","travelCost":180,"totalCost":0}', 'repair', 'ips', 'SEPI 1250 VA DSP IPS ', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'completed', 'dashboard', 'service_center', true, NULL, NULL, '2026-07-08 06:27:31.560733+00', '2026-08-04 10:46:58.26+00');
INSERT INTO public.services VALUES ('2094ce50-238c-4018-839c-4538c86aed92', 'SED603PVPW', NULL, 'Mr Sir', '01717317401', 'Amber Khana Sylhet', NULL, NULL, NULL, 'SE2L0OQUBT', NULL, 'MD HALIM MIA', '01312954819', NULL, 'repair', 'ips', 'Not warking', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'canceled', 'dashboard', NULL, true, NULL, NULL, '2026-08-04 10:10:59.731986+00', '2026-08-04 19:09:24.011+00');
INSERT INTO public.services VALUES ('e94218e3-5674-4321-906a-a06aeff233c1', 'SEVTH0NE5K', 'SEQSICV1EN', 'Md Monir Ahmed', '01710460124', 'Shobid bazar kola para noton Moshjid Sylhet ', NULL, NULL, NULL, 'SEQ2FBJ75J', NULL, 'HALIM MIA', '01312954819', '{"resolved":true,"explanation":"line tanaa silo aamra shodo cenection disi","travelCost":80,"totalCost":0}', 'install', 'ips', 'SEPI 1050 VA DSP SINE WAVE IPS ', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'completed', 'dashboard', 'service_center', true, NULL, NULL, '2026-07-28 08:41:20.082251+00', '2026-08-08 09:27:27.08+00');
INSERT INTO public.services VALUES ('428e4b71-019e-46ee-8d9c-dbd5e55c04b0', 'SEPKD27390', NULL, 'Samad Ahmed', '01813164570', 'zinda bazer sylhet', NULL, NULL, NULL, 'SE2L0OQUBT', NULL, 'MD HALIM MIA', '01312954819', '{"resolved":true,"explanation":"সার্ভিস সেন্টার থেকে আই পি এস ও ব্যাটার সাভিস করে নিছে ওয়ারেন্টি কার্ড এন্ট্রি করে নাই যার ফিলে ওয়ারেন্টি পাইনি","travelCost":200,"totalCost":1850}', 'repair', 'ips', 'MSP SE 850 VA IPS NOT CHRGING BACKUP', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'completed', 'dashboard', 'service_center', true, NULL, NULL, '2026-08-03 13:57:47.258022+00', '2026-08-12 11:03:52.409+00');
INSERT INTO public.services VALUES ('b2f62236-0c23-4118-bafc-3446e4358c4a', 'SE2JYULTV0', 'SEA1AKR40C', 'FATIMA INTR', '01713822845', '1no rob menshen vip road jito mia point sylhet', NULL, NULL, NULL, 'SEQ2FBJ75J', NULL, 'HALIM MIA', '01312954819', '{"resolved":true,"explanation":"1.3 rm tar 60 f se ele com diyese","travelCost":200,"totalCost":820}', 'install', 'ips', 'SEPI 1250 VA DSP SINE WAVE 12 IPS', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'completed', 'dashboard', 'service_center', true, NULL, NULL, '2026-08-13 08:04:00.766284+00', '2026-08-14 09:19:42.455+00');
INSERT INTO public.services VALUES ('19ae67a9-8ead-4ead-bf46-4a143e135cd7', 'SE53W3BWD7', 'SE8RM03D8C', 'Mss. Eva ', '01775400814', '103/a block d Islampur mejortila sylhet ', NULL, NULL, NULL, 'SEQ2FBJ75J', NULL, 'HALIM MIA', '01312954819', '{"resolved":true,"explanation":"সামান্য কিছু তার ও প্লাগ লেগেছে এগুলো কাস্টমার এনে দিয়েছে ","travelCost":500,"totalCost":0}', 'install', 'ips', 'SEPI 1050 VA SQ IPS KST', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'completed', 'dashboard', 'service_center', true, NULL, NULL, '2026-08-17 08:19:55.333495+00', '2026-08-23 21:46:10.859+00');
INSERT INTO public.services VALUES ('6be03af6-c8cc-4d04-ad83-b2685688e3e3', 'SE8603YSLQ', 'SECPPLB106', 'Mr. Khurshed Alam', '01716442141', 'Kasba Chargachh Bazar Brahmin Bariya', NULL, NULL, NULL, 'SEQ2FBJ75J', NULL, 'HALIM MIA', '01312954819', '{"resolved":true,"explanation":"ওয়ারিং করা ছিল আর কিছু তার লেগেছে এগুলা কাস্টমার দিয়েছে ","travelCost":2000,"totalCost":0}', 'install', 'ips', 'SEPI 1500 VA 24 V DSP IPS', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'completed', 'dashboard', 'service_center', true, NULL, NULL, '2026-08-23 09:08:34.028469+00', '2026-08-25 05:51:24.621+00');
INSERT INTO public.services VALUES ('5fb07077-1e10-4f4d-a579-19425ed32ee2', 'SE3L24CRRM', 'SEULZI14CJ', 'Mokhfur Chowdhury', '01730049205', 'Shahjalal Tower, 27/2 Payra, Flat 7D, (Lift 7), Sylhet', NULL, NULL, NULL, 'SEQ2FBJ75J', NULL, 'HALIM MIA', '01312954819', '{"resolved":true,"explanation":"সব মালা মাল কাস্টমার দিছে ","travelCost":200,"totalCost":0}', 'install', 'ips', 'SEPI 1250 VA  DSP SINE WAVE IPS ', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'completed', 'dashboard', 'staff_member', true, NULL, NULL, '2026-09-02 04:06:08.069684+00', '2026-09-02 10:15:39.501+00');
INSERT INTO public.services VALUES ('224c4293-8b54-4a06-9a72-fd477cc89c0b', 'SETM13C0HL', 'SEKW8W38E0', 'Nazmul Motin', '01711778531', '49 Saodagar Tola kumar para Sylhet ', NULL, NULL, NULL, 'SEQ2FBJ75J', NULL, 'HALIM MIA', '01312954819', '{"resolved":true,"explanation":"তার 25 ফুট পায়ার বোড 3 প্লাগ লাইন টানা সর কোম্পানী দিয়েছে","travelCost":400,"totalCost":1020}', 'install', 'ips', 'Luminus 1050 ', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'completed', 'dashboard', 'service_center', true, NULL, NULL, '2026-08-20 09:11:56.466461+00', '2026-08-26 07:08:53.562+00');


--
-- Data for Name: feedbacks; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.feedbacks VALUES ('379c54a3-a517-4b1e-bd2a-281b8e826d88', 'SESPUXV13A', 'SETBR5KC3P', '[{"question":"আপনার প্রডাক্ট এর সার্ভিসটি সঠিক ভাবে সমাধান করা হয়েছে কি না?","answer":"হ্যাঁ"},{"question":"প্রডাক্টটি ইনস্টলেশনটি নির্দিষ্ট সময়ের মধ্যে সম্পন্ন করা হয়েছে কি না?","answer":"না"},{"question":"সার্ভিসের মান নিয়ে আপনি সন্তুষ্টি আছেন কি না?","answer":"হ্যাঁ"},{"question":"সার্ভিস এক্সপার্টের আচার আচরনে আপনি সন্তুষ্ট আছেন কি না?","answer":"হ্যাঁ"},{"question":"সার্ভিস এক্সপার্ট আপনার সার্ভিসটি যথা সময়ে গিয়েছিল কি ?","answer":"হ্যাঁ"},{"question":"সার্ভিস এক্সপার্ট কি আপনার থেকে কোম্পানির সার্ভিসের সময়ে আপনার থেকে অতিরিক্ত কোন অর্থ চেয়েছে কি না?","answer":"না"}]', NULL, '2026-05-04 13:39:04.312213+00', '2026-05-04 13:39:04.312213+00');
INSERT INTO public.feedbacks VALUES ('8134457c-e6b7-4718-839a-561b312b4fb9', 'SE2JYULTV0', 'SEA1AKR40C', '[{"question":"আপনার প্রডাক্ট এর সার্ভিসটি সঠিক ভাবে সমাধান করা হয়েছে কি না?","answer":"হ্যাঁ"},{"question":"প্রডাক্টটি ইনস্টলেশনটি নির্দিষ্ট সময়ের মধ্যে সম্পন্ন করা হয়েছে কি না?","answer":"হ্যাঁ"},{"question":"সার্ভিসের মান নিয়ে আপনি সন্তুষ্টি আছেন কি না?","answer":"হ্যাঁ"},{"question":"সার্ভিস এক্সপার্টের আচার আচরনে আপনি সন্তুষ্ট আছেন কি না?","answer":"হ্যাঁ"},{"question":"সার্ভিস এক্সপার্ট আপনার সার্ভিসটি যথা সময়ে গিয়েছিল কি ?","answer":"হ্যাঁ"},{"question":"সার্ভিস এক্সপার্ট কি আপনার থেকে কোম্পানির সার্ভিসের সময়ে আপনার থেকে অতিরিক্ত কোন অর্থ চেয়েছে কি না?","answer":"না","comment":"দুখজনক কোন ব্যটারি বক্স দেয় নাই। যেটা সত্যিই হতাশাজনক।  ব্যটারি বক্স দিলে ভালো হয়। আশা করি প্রতিষ্ঠান ব্যপারটির সুরাহা করবে।"}]', NULL, '2026-08-14 10:07:16.295845+00', '2026-08-14 10:07:16.295845+00');


--
-- Data for Name: invoices; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.invoices VALUES ('f7653357-36ff-4211-874e-63de9433de9d', '91049571', 'SEULZI14CJ', 'Mokhfur Chowdhury', '01730049205', 'Shahjalal Tower, 27/2 Payra, Flat 7D, (Lift 7), Sylhet', '2026-08-30 09:52:29.48+00', 'bank', 40500.00, 40500.00, 0.00, '2026-08-30 09:59:30.37361+00', '2026-08-30 09:59:30.37361+00', 'due', NULL);
INSERT INTO public.invoices VALUES ('ef554045-0aff-442f-a0c4-c2a30a366e4f', '64438577', 'SEWCFAWBYM', 'Shabuddin Mahamud', '01310673600', 'Badambagicha Rd No. 4 Sylhet ', '2026-04-17 19:10:46.413+00', 'bkash', 14800.00, 14800.00, 2000.00, '2026-04-17 19:13:37.671799+00', '2026-09-05 15:10:51.879+00', 'installment', '');
INSERT INTO public.invoices VALUES ('707f11df-a6e1-4f7c-b413-40a8407fbb29', '33555695', 'SEG5QGTK7I', 'Ripa Mahamud', '01322247774', 'Lahattar pol boro koborrosthan Chittagong ', '2026-04-17 19:15:54.774+00', 'nagad', 32000.00, 30400.00, 0.00, '2026-04-17 19:19:14.591293+00', '2026-04-17 19:19:16.696+00', 'due', NULL);
INSERT INTO public.invoices VALUES ('0d06758a-b381-4327-9f4d-74d8dff949ff', '22874195', 'SE3TLRL5MG', 'jamiatul khair al islamiya madrasah.77000 ', '01955476395', 'Pir''s Bazar Chowdhury Para Boteswar Sylhet', '2026-05-16 07:00:03.305+00', 'cash', 77840.00, 77840.00, 0.00, '2026-05-16 07:15:44.14551+00', '2026-05-18 09:44:27.724+00', 'due', NULL);
INSERT INTO public.invoices VALUES ('2d1eec12-7061-4dc7-8d7a-dd29495874ca', '80577743', 'SEYSZ0ELKG', 'মো বিপ্লব তালুকদার', '01732599441', 'শামীমাবাদ,মজুমদারপাড়া ৩রোড', '2026-04-18 07:13:18.447+00', 'cash', 29500.00, 29500.00, 4500.00, '2026-04-18 07:17:29.292159+00', '2026-04-18 08:41:45.142+00', 'due', NULL);
INSERT INTO public.invoices VALUES ('e5c146a4-e3a2-44d6-916e-6b29247cac26', '23069166', 'SEZE66FDN4', 'ARMAN REFRIGAR  (BAT NOT MY)', '01752288447', 'YEASIN PLAZA KODOM TOLI SYLHET', '2026-04-18 11:40:42.564+00', 'cash', 38000.00, 38000.00, 0.00, '2026-04-18 11:51:13.57582+00', '2026-04-18 12:02:45.283+00', 'due', NULL);
INSERT INTO public.invoices VALUES ('79115ad3-8a0f-4d99-a384-21d9bb3269e4', '21745886', 'SERY4IEAOT', 'MD AMINUR ROHOMAN', '01716563822', 'শামীমাবাদ,মজুমদারপাড়া ৩ রোড সিলেট', '2026-04-18 17:28:51.052+00', 'cash', 29500.00, 29500.00, 0.00, '2026-04-18 17:35:33.490152+00', '2026-04-24 10:46:21.808+00', 'due', NULL);
INSERT INTO public.invoices VALUES ('9f1aa405-c7ea-44bd-9cee-4c385551c08c', '66654796', 'SEXS1BE34B', 'MD RAHAT ', '01644720694', 'PIRMOHOLLA  OIKKOTAN SYLHER', '2026-05-25 17:04:31.467+00', 'cash', 38000.00, 38000.00, 0.00, '2026-05-25 17:08:27.94721+00', '2026-05-26 09:44:29.631+00', 'due', NULL);
INSERT INTO public.invoices VALUES ('bc486d16-fee2-42ef-91b0-e49140b3fb10', '38682103', 'SEBLZ5CO6M', 'MD SHOMON MIYA', '01708959429', 'KOLWRA HAZI PUR SYLHET', '2026-04-21 11:17:34.015+00', 'cash', 16500.00, 16500.00, 0.00, '2026-04-21 11:21:25.843818+00', '2026-04-21 11:21:25.843818+00', 'due', NULL);
INSERT INTO public.invoices VALUES ('a74d2fcb-f4e8-4192-a8fd-c1205fdefc5d', '17905967', 'SE6EYFREV4', 'Jagannathpur Pharmacy', '01601627581', 'Jagannathpur Vishwanath sylhet', '2026-05-30 11:03:08.987+00', 'bkash', 3500.00, 3500.00, 0.00, '2026-05-30 11:09:03.598264+00', '2026-05-30 11:09:03.598264+00', 'due', NULL);
INSERT INTO public.invoices VALUES ('0de684b4-97b4-49bc-bf63-45b029751d83', '84933137', 'SEP8BEVJJJ', 'MD SHIEKH RAFI', '01851344473', 'Agroni 96 Londoni Road Sylhit', '2026-04-18 17:20:00.732+00', 'bank', 41100.00, 41100.00, 0.00, '2026-04-18 17:24:40.338684+00', '2026-04-22 17:39:35.489+00', 'due', NULL);
INSERT INTO public.invoices VALUES ('c835ec86-0823-411d-a0ca-d4409939167a', '14878771', 'SED31QHDIM', 'MD ABDUL MOJID', '01716465658', 'DAROSSALAM  MADRASHA ROD KHASTOBIR', '2026-04-24 11:19:12.947+00', 'cash', 29500.00, 29500.00, 0.00, '2026-04-24 11:25:23.242599+00', '2026-04-24 11:26:27.666+00', 'due', NULL);
INSERT INTO public.invoices VALUES ('2a44901f-b190-4ab8-9005-21807f52f757', '93034130', 'SED0JJIDIR', 'MD JOSHIM ', '01660022564', 'Shobid bazar bon kola para sylhet', '2026-08-30 17:23:43.63+00', 'cash', 8000.00, 8000.00, 0.00, '2026-08-30 17:26:20.54729+00', '2026-08-30 17:26:20.54729+00', 'due', NULL);
INSERT INTO public.invoices VALUES ('bffe9060-f826-4b1a-b35c-503dddc47e47', '84737577', 'SE5850EG4Y', 'Majida Chowdhury', '01710932413', 'Jalalabad 37. House No. 37/2 Mannan Villa Sylhet', '2026-07-21 06:41:35.271+00', 'cash', 28380.00, 28380.00, 3000.00, '2026-07-21 06:53:39.831383+00', '2026-09-05 15:12:22.134+00', 'installment', '');
INSERT INTO public.invoices VALUES ('bc8abf84-a450-40dd-83a7-602327c0257c', '60758646', 'SEJFNPD38M', 'MD SHIRAJUL ISLAM', '01712452755', 'JAWA BAZER SYLHET', '2026-06-17 15:24:38.189+00', 'cash', 8500.00, 8500.00, 0.00, '2026-06-17 15:27:57.376136+00', '2026-06-19 19:06:20.24+00', 'due', NULL);
INSERT INTO public.invoices VALUES ('b78407f3-6b5d-43ef-b515-8b543536245a', '50581514', 'SE3FCX0GMI', 'Amir Mia', '01763620777', 'আখালিয়া নতুন বাজার  দুষ্কি মসজিদের পাশে', '2026-08-03 11:29:03.564+00', 'cash', 38000.00, 38000.00, 0.00, '2026-08-03 11:36:37.057475+00', '2026-08-05 08:14:18.652+00', 'due', NULL);
INSERT INTO public.invoices VALUES ('07f76b09-26bf-44de-a4c3-6bb6a1e4b132', '37934809', 'SENPBR9M2A', 'MD HADI', '01717020773', 'PIRMOHOLLA MOSHJID GOLLI 148/38 MAHAMUD VILA', '2026-04-23 11:56:06.353+00', 'cash', 12000.00, 12000.00, 0.00, '2026-04-23 11:58:25.047163+00', '2026-04-27 13:59:22.704+00', 'due', NULL);
INSERT INTO public.invoices VALUES ('b8051e96-93cc-41ad-a32a-8561330958c7', '83977123', 'SE34VSHIB2', 'MD ABDUL MOTIN ', '01716387242', 'SHAMIMABAD MOHILA COL SYLHET ', '2026-04-21 12:10:57.164+00', 'cash', 42000.00, 42000.00, 0.00, '2026-04-21 12:15:49.640473+00', '2026-04-27 14:00:07.217+00', 'due', NULL);
INSERT INTO public.invoices VALUES ('c95d92b3-b39d-4346-a877-a1acced959b7', '09834499', 'SE82OFPGZP', 'MD ROKIV ', '01317967827', 'SOIUD MOGNI SYLHET', '2026-04-21 15:16:06.617+00', 'cash', 22500.00, 22500.00, 0.00, '2026-04-21 15:17:52.235935+00', '2026-04-28 18:22:20.36+00', 'due', NULL);
INSERT INTO public.invoices VALUES ('6450624f-ac08-4f7c-9414-8e7549617d65', '12657873', 'SEPX7L8D7H', 'Ruhul Amin', '01616091393', 'মির্জা হাউজ ৩৪৭/এ-১২ আখড়া রোড উত্তর বাগবাড়ি সিলেট', '2026-06-08 13:09:19.108+00', 'cash', 11000.00, 11000.00, 0.00, '2026-06-08 13:13:22.495399+00', '2026-06-10 08:24:21.544+00', 'due', NULL);
INSERT INTO public.invoices VALUES ('44422a59-fb99-427a-a2d4-b99df70bc437', '28935234', 'SEKTFSOQ0D', 'MD FAHAD', '01334409044', 'KHADIM NOGAR DASH PARA', '2026-04-28 07:02:01.996+00', 'cash', 12000.00, 12000.00, 0.00, '2026-04-28 07:04:04.12219+00', '2026-05-02 13:52:28.975+00', 'due', NULL);
INSERT INTO public.invoices VALUES ('dab4ff50-dddb-4643-809a-46f47609429b', '41131855', 'SERVQ8K5V5', 'MD NURALAM', '01717543322', 'LONDONI ROAD SHOBID BAZER SYLHET', '2026-04-27 13:34:33.913+00', 'cash', 12500.00, 12500.00, 0.00, '2026-04-27 13:36:25.364203+00', '2026-05-02 13:53:11.993+00', 'due', NULL);
INSERT INTO public.invoices VALUES ('489ed7cb-8126-4857-8866-395b43f9d5cf', '65528838', 'SETBR5KC3P', 'MD MAMUN BAI ', '01911199796', 'Block E, Road 6, Spring Tower,  Uposhahor, Sylhet', '2026-05-02 09:04:22.739+00', 'bank', 27400.00, 27400.00, 0.00, '2026-05-02 09:21:08.391714+00', '2026-05-03 17:44:18.811+00', 'due', NULL);
INSERT INTO public.invoices VALUES ('d784c616-262d-4c0a-ab41-bceb977134ee', '02756632', 'SEXHB56LCA', 'Maruf Ahmed ', '01718712492', 'Jollar par sylhet', '2026-06-14 07:25:21.728+00', 'cash', 12500.00, 12500.00, 0.00, '2026-06-14 07:27:21.521579+00', '2026-06-23 08:00:59.595+00', 'due', NULL);
INSERT INTO public.invoices VALUES ('6549ea70-4530-4966-887a-8b0323f268dd', '14475817', 'SERBL8II5B', 'MD MASUD RANA', '01627562997', 'SHAMIMABAD MOJUMDAR PARA SYLHET', '2026-04-21 09:12:54.25+00', 'bank', 29900.00, 29900.00, 0.00, '2026-04-21 09:20:13.348132+00', '2026-05-03 17:47:33.198+00', 'due', NULL);
INSERT INTO public.invoices VALUES ('115d9ed2-e529-41e4-864a-adad514f935c', '74725964', 'SE5X8714PE', 'MD JONAYED', '01751559105', 'Uposhohor E block,  road 6, basha no: 197', '2026-06-25 16:12:07.049+00', 'cash', 20000.00, 20000.00, 0.00, '2026-06-25 16:14:18.706993+00', '2026-06-25 16:14:18.706993+00', 'due', NULL);
INSERT INTO public.invoices VALUES ('33f42b37-7e49-4d0f-93c6-923147711c30', '58434422', 'SEHBGMI4B4', 'MD JOSHIM ', '01710972946', 'Sherpur  chargers  brahmanbaria ', '2026-04-25 13:02:25.613+00', 'cash', 29500.00, 29500.00, 0.00, '2026-04-25 13:05:27.160033+00', '2026-05-06 16:52:24.814+00', 'due', NULL);
INSERT INTO public.invoices VALUES ('b8d7d97d-3bfe-4a6f-ba07-1ddcfed092f6', '66144181', 'SEP728Z15J', 'MD SOJIB AHMED ', '01959983858', 'Badaghat Taherpur Shonamgonj', '2026-06-30 16:16:19.548+00', 'cash', 12500.00, 12500.00, 450.00, '2026-06-30 16:18:18.552005+00', '2026-07-01 13:48:54.473+00', 'due', NULL);
INSERT INTO public.invoices VALUES ('f3a13a4a-0d6f-4bdd-b649-b9f2fc792da0', '49162389', 'SEC96ZEINO', 'ATIKUR ROHOMAN', '01310673602', 'Badambagicha Rd No. 2 Sylhet ', '2026-07-02 19:18:47.538+00', 'bank', 12000.00, 12000.00, 0.00, '2026-07-02 19:21:16.213753+00', '2026-07-07 15:44:11.811+00', 'due', NULL);
INSERT INTO public.invoices VALUES ('d2eb9038-494d-4fde-819a-8800327ef101', '56592558', 'SEKBDPLPKM', 'JAKARIYA AHMED EMON', '01725111363', 'Darussalam Moshjid boro Bazaar Sylhet', '2026-05-23 15:13:51.208+00', 'cash', 31500.00, 31500.00, 5500.00, '2026-05-23 15:26:17.541521+00', '2026-07-08 06:41:05.678+00', 'due', NULL);
INSERT INTO public.invoices VALUES ('2b789a62-f38d-430f-8b20-1abd25bb620e', '81203990', 'SEOYW3C1SY', 'Shanjida Naj', '01950737386', 'Khadimpara , road - 03 Shahporan', '2026-06-28 18:40:28.684+00', 'cash', 14000.00, 14000.00, 0.00, '2026-06-28 18:46:09.933741+00', '2026-07-11 14:49:31.871+00', 'due', NULL);
INSERT INTO public.invoices VALUES ('e1885dbd-eb47-4a4d-a8c6-15ae93af57f0', '24997384', 'SEH73UD7W2', 'Md Yakub ali', '01311816747', 'Mymensingh bhaluka', '2026-07-13 13:52:51.499+00', 'cash', 12500.00, 12500.00, 500.00, '2026-07-13 13:55:43.782314+00', '2026-07-13 13:56:02.644+00', 'due', NULL);
INSERT INTO public.invoices VALUES ('7d6b8ffc-571b-4423-a7e8-0dc42fe5ff75', '11478767', 'SEUO1H6E57', 'Ripa Mahamud', '01310673600', 'Badambagicha Rd No. 4', '2026-07-23 06:48:11.394+00', 'cash', 4500.00, 4500.00, 0.00, '2026-07-23 06:49:42.390598+00', '2026-08-14 22:29:08.376+00', 'due', NULL);
INSERT INTO public.invoices VALUES ('f42c98fc-4090-42c9-919e-3b3e5ec87789', '76511164', 'SE4V7QF15D', 'Lovely dev roy', '01779-878383', '14/1A Meghna, Dariapara Sylhet', '2026-07-14 07:22:31.266+00', 'cash', 15000.00, 15000.00, 0.00, '2026-07-14 07:28:19.716518+00', '2026-07-14 07:28:19.716518+00', 'due', NULL);
INSERT INTO public.invoices VALUES ('734f7bff-ad71-4345-b31f-1a703791b0b0', '81953703', 'SEQSICV1EN', 'Md Monir Ahmed', '01710460124', 'Shobid bazar kola para noton Moshjid Sylhet ', '2026-07-28 08:36:57.167+00', 'cash', 34900.00, 34900.00, 0.00, '2026-07-28 08:40:29.464001+00', '2026-08-14 12:02:08.806+00', 'due', NULL);
INSERT INTO public.invoices VALUES ('c1d8a85d-dc6a-49c5-b0f5-f8710a33219a', '04667950', 'SEECX49SUT', 'MD AHILL MAHAMUD', '01322247774', 'Badambagicha Rd No. 4', '2026-07-22 16:15:55.672+00', 'cash', 12000.00, 12000.00, 1000.00, '2026-07-22 16:17:01.702833+00', '2026-07-22 16:17:43.306+00', 'due', NULL);
INSERT INTO public.invoices VALUES ('0e8ce9f5-5775-4180-ab87-4ef205df393d', '87315034', 'SE66TEYRB0', 'MD RIPON ', '01712317031', 'Badam bagicha  2 No road 41 No House Sylhet', '2026-06-23 07:57:15.415+00', 'cash', 25000.00, 25000.00, 0.00, '2026-06-23 08:00:10.028255+00', '2026-07-28 09:31:01.982+00', 'due', NULL);
INSERT INTO public.invoices VALUES ('0610d99b-214c-4f11-b49e-33b921972de3', '06643392', 'SEHIGKRDF4', 'Md Amad', '01756584931', '96, kamala bagan, mojumdari  Sylhet ', '2026-07-29 07:24:14.331+00', 'cash', 37000.00, 37000.00, 0.00, '2026-07-29 07:28:41.980554+00', '2026-08-01 16:04:09.646+00', 'due', NULL);
INSERT INTO public.invoices VALUES ('769f3e53-f419-4a84-a236-ff97545f89af', '00875524', 'SEGIARKU6A', 'Md Mubin Ahmed', '01752288447', 'Kodom toli yeasin plaza Sylhet ', '2026-07-31 09:28:54.788+00', 'cash', 10200.00, 10200.00, 10200.00, '2026-07-31 09:31:21.327622+00', '2026-07-31 09:31:21.327622+00', 'due', NULL);
INSERT INTO public.invoices VALUES ('75e8a297-f929-4c3f-9395-1878f1021cce', '17356236', 'SE16HPO2NM', 'Md saiful islam ', '01912357286', 'badaghat tahirpur Sunamganj', '2026-06-03 14:08:51.154+00', 'cash', 11500.00, 11500.00, 7300.00, '2026-06-03 14:10:13.030091+00', '2026-08-05 08:10:05.373+00', 'due', NULL);
INSERT INTO public.invoices VALUES ('0e758aca-1bec-4f97-b523-43549cd276cd', '11824997', 'SERLH0RFSE', 'MD Robel Ahmed', '01712454866', 'Chowkidekhi Sylhet', '2026-08-28 13:46:24.554+00', 'cash', 12000.00, 12000.00, 0.00, '2026-08-28 13:51:02.454669+00', '2026-08-31 18:07:02.125+00', 'due', NULL);
INSERT INTO public.invoices VALUES ('b994cfa2-3025-4f2b-9f03-c7e45d223da5', '14016761', 'SEA1AKR40C', 'FATIMA INTR', '01713822845', '1no rob menshen vip road jito mia point sylhet', '2026-08-09 12:50:00.682+00', 'cash', 38000.00, 38000.00, 0.00, '2026-08-09 12:54:53.704251+00', '2026-08-14 12:03:22.352+00', 'due', NULL);
INSERT INTO public.invoices VALUES ('b3f2b947-6100-4e66-885d-ac117210f36d', '87112703', 'SEO2JT65NQ', 'Mohammed Emam', '01792307555', 'Badambagicha Rd No. 3 House no 6B', '2026-08-12 11:05:15.044+00', 'cash', 26300.00, 26300.00, 0.00, '2026-08-12 11:07:19.972601+00', '2026-08-14 17:40:57.657+00', 'due', NULL);
INSERT INTO public.invoices VALUES ('e4d573d7-8a85-4d7f-9732-88476b35dada', '63015932', 'SEXM6JA1VL', 'MD. RAKIB HUSSEN', '01304761002', 'Shobid bazar  Sylhet ', '2026-08-08 08:57:00.138+00', 'cash', 9150.00, 9150.00, 0.00, '2026-08-08 09:01:37.536859+00', '2026-08-17 09:50:39.779+00', 'due', NULL);
INSERT INTO public.invoices VALUES ('fc76a6ac-35da-4c22-977c-9526ecb2a7ee', '46181405', 'SEKW8W38E0', 'Nazmul Motin', '01711778531', '49 Saodagar Tola kumar para Sylhet ', '2026-08-20 08:41:49.325+00', 'cash', 34980.00, 34980.00, 0.00, '2026-08-20 08:51:06.525975+00', '2026-08-21 11:42:44.296+00', 'due', NULL);
INSERT INTO public.invoices VALUES ('1ea5fa1a-5e75-42f0-9e08-bb92d4123814', '66262963', 'SE8RM03D8C', 'Mss. Eva ', '01775400814', '103/a block d Islampur mejortila sylhet ', '2026-08-17 08:09:53.493+00', 'cash', 38000.00, 38000.00, 28000.00, '2026-08-17 08:15:17.851548+00', '2026-09-05 15:12:06.047+00', 'installment', '');
INSERT INTO public.invoices VALUES ('aaa08c81-d92f-4bbf-92a4-9e0d0862f2d7', '72998094', 'SE6PXQH371', 'Md kobir chw', '01711165192', 'Paharika 5 no  Sylhet ', '2026-08-09 16:12:37.363+00', 'cash', 14000.00, 14000.00, 0.00, '2026-08-09 16:18:19.593638+00', '2026-08-23 23:14:15.203+00', 'due', NULL);
INSERT INTO public.invoices VALUES ('0a528421-bbf4-41cf-8f92-affd73177743', '27385729', 'SEGTHLB4M5', 'Md Biplob Bai', '01712509546', 'Badam bagicha jame moshjid ', '2026-08-08 13:58:46.509+00', 'bkash', 13500.00, 13500.00, 0.00, '2026-08-08 14:02:14.029859+00', '2026-08-23 23:14:41.599+00', 'due', NULL);
INSERT INTO public.invoices VALUES ('4ebf1dd7-a542-488c-b3e6-4fcec3f10526', '19668922', 'SECPPLB106', 'Mr. Khurshed Alam', '01716442141', 'Kasba Chargachh Bazar Brahmin Bariya', '2026-08-23 08:42:35.13+00', 'cash', 47000.00, 47000.00, 7000.00, '2026-08-23 08:57:14.190807+00', '2026-08-25 05:43:16.421+00', 'due', NULL);
INSERT INTO public.invoices VALUES ('1940232c-5b29-468a-80af-3223482bcdb1', '06407261', 'SEVCHY8E8C', 'Md nayem', '01891899338', 'Badambagicha Rd No. 4', '2026-09-06 16:43:11.289+00', 'cash', 12500.00, 12500.00, 2000.00, '2026-09-06 16:46:31.892673+00', '2026-09-06 16:46:31.892673+00', 'due', '');


--
-- Data for Name: notices; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: noticeRecipients; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: payments; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.payments VALUES ('ee0ec452-6a71-4507-8ef6-7ca60ad70b79', 'SED7EKA0JT', 'SE2L0OQUBT', 'BAL-1784635551914-SEKCJ8R7', 'nagad', NULL, NULL, NULL, NULL, 10.00, 'SEDMVUT0WI', 'credited', NULL, 'Service charge added for job #SEDMVUT0WI', '2026-07-21 12:05:51.914+00', '2026-07-21 12:05:52.446287+00', '2026-07-21 12:05:52.446287+00');
INSERT INTO public.payments VALUES ('c0031b0e-a1ac-4bde-9b49-a577a262af5e', 'SEMGTFD0ZU', 'SETJ1RPUO8', 'REQ-1776454898924-SEE0OZMV', 'bkash', NULL, NULL, '01310673600', NULL, 1100.00, NULL, 'completed', NULL, '
', '2026-04-17 19:41:38.924+00', '2026-04-17 19:41:39.031756+00', '2026-04-17 20:23:50.187+00');
INSERT INTO public.payments VALUES ('41db937a-709d-4988-8135-e0626aca7e65', 'SEJRNG6AI1', 'SEQ2FBJ75J', 'BAL-1776534273867-SEN9U7ZD', 'nagad', NULL, NULL, NULL, NULL, 10.00, 'SE3NL80LG0', 'credited', NULL, 'Virtual balance added by admin', '2026-04-18 17:44:33.867+00', '2026-04-18 17:44:34.400114+00', '2026-04-18 17:44:34.400114+00');
INSERT INTO public.payments VALUES ('7bcdf178-24aa-4812-9a6b-85dc92995a67', 'SEMYZAU8HR', 'SEQ2FBJ75J', 'BAL-1776804648179-SESNVM46', 'nagad', NULL, NULL, NULL, NULL, 50.00, 'SE1IMT8LUF', 'credited', NULL, 'SE1IMT8LUF এক্সটা ৫০ টাকা ব্যালেন্স দেওয়া হল।', '2026-04-21 20:50:48.179+00', '2026-04-21 20:50:48.744669+00', '2026-04-21 20:50:48.744669+00');
INSERT INTO public.payments VALUES ('b92132c6-6d5b-4c69-a6e0-fceee87cc4b9', 'SE62W7Z7B7', 'SEQ2FBJ75J', 'BAL-1777667128987-SEU0AGED', 'nagad', NULL, NULL, NULL, NULL, 20.00, 'SE81XT2D1P', 'credited', NULL, 'Virtual balance added by admin', '2026-05-01 20:25:28.987+00', '2026-05-01 20:25:29.548494+00', '2026-05-01 20:25:29.548494+00');
INSERT INTO public.payments VALUES ('d53a04b2-893e-48fd-9bda-75dbc4d215b0', 'SEALB5TR87', 'SETJ1RPUO8', 'BAL-1784649548295-SEQD063Z', 'bkash', NULL, NULL, NULL, NULL, 100.00, NULL, 'credited', NULL, 'Service charge added for job #SEXNG76MVQ', '2026-07-21 15:59:08.295+00', '2026-07-21 15:59:08.861107+00', '2026-07-21 15:59:08.861107+00');
INSERT INTO public.payments VALUES ('47e7aa34-b572-47c5-bc09-613f86107d60', 'SEM267XAVM', 'SEQ2FBJ75J', 'REQ-1777731707789-SEB3ZDCS', 'nagad', NULL, NULL, '01312954819', NULL, 20.00, NULL, 'completed', NULL, '', '2026-05-02 14:21:47.789+00', '2026-05-02 14:21:47.897365+00', '2026-05-02 14:32:03.864+00');
INSERT INTO public.payments VALUES ('23653a44-97e6-48ab-a50f-31a51893bddd', 'SEDGCZ94YR', 'SETJ1RPUO8', 'REQ-1777733434056-SE042U49', 'bkash', NULL, NULL, '01310673600', NULL, 150.00, NULL, 'completed', NULL, '
', '2026-05-02 14:50:34.056+00', '2026-05-02 14:50:34.173817+00', '2026-05-02 14:52:44.826+00');
INSERT INTO public.payments VALUES ('464f9db1-cd9f-46a2-8b02-9568cf84d53e', 'SE16QYBP0Z', 'SEQQTONWQD', 'REQ-1785302113630-SEFPKV4R', 'bkash', '01310673600', NULL, '01322247771', NULL, 300.00, NULL, 'completed', 'DUR34HDKFM', 'আপনার ক্যাশ আউট এর রিকয়েস্ট এর টাকা আপনার বিকাশ নাম্বারে সফল ভাবে পেমেন্ট করা হয়েছে', '2026-08-11 00:00:00+00', '2026-07-29 05:15:13.739284+00', '2026-08-11 21:16:00.235+00');
INSERT INTO public.payments VALUES ('58b74c66-9317-47ab-a4d1-d05cf5d934e0', 'SEB013BGN9', 'SEQQTONWQD', 'REQ-1786482551553-SE7K83BJ', 'bkash', '01310673600', NULL, '01322247771', NULL, 150.00, NULL, 'completed', 'DUT34GHU34', 'Payout completed for withdrawal request', '2026-08-11 00:00:00+00', '2026-08-11 21:09:11.67287+00', '2026-08-11 21:22:54.327+00');
INSERT INTO public.payments VALUES ('fadfe95d-786a-4002-972e-4ed7731abd7b', 'SEEE5FA9K0', 'SEQ2FBJ75J', 'REQ-1778925442104-SE9JAG7U', 'nagad', '01310673600', NULL, '01312954819', NULL, 60.00, NULL, 'completed', 'SE CASH PAYMENT', 'Halim cash Payment 60 Tk only', '2026-05-16 09:57:22.104+00', '2026-05-16 09:57:22.213908+00', '2026-05-16 10:12:53.649+00');
INSERT INTO public.payments VALUES ('ea9c6760-fff8-406b-aa3d-b78aaaed28c5', 'SE5PT1NYLX', 'SETJ1RPUO8', 'REQ-1786484083384-SEIBVG2X', 'bank', NULL, NULL, NULL, '{"bankName":"DBBL BANK","accountHolderName":"MD SHAHAB UDDIN MAHAMUD ","accountNumber":"121 111 5678987","branchName":"SYLHET BRANCH"}', 400.00, NULL, 'completed', NULL, 'Payout completed for withdrawal request', '2026-08-11 00:00:00+00', '2026-08-11 21:34:43.498402+00', '2026-08-11 21:37:59.209+00');
INSERT INTO public.payments VALUES ('dba2de45-2666-4c55-b7d1-a8d4a7cb33c7', 'SEI2ZO5TPP', 'SETJ1RPUO8', 'REQ-1781798039754-SEVR90Q8', 'bkash', '01310673600', NULL, '01310673600', NULL, 100.00, NULL, 'completed', 'DFR46HGY6Y', '', '2026-06-18 15:53:59.754+00', '2026-06-18 15:53:59.862487+00', '2026-06-19 19:07:54.592+00');
INSERT INTO public.payments VALUES ('004ab9c5-f525-4f66-ad59-5a03118a6f3d', 'SEC1G7MM53', 'SETJ1RPUO8', 'REQ-1786484652082-SEUKPC6F', 'bank', NULL, NULL, NULL, '{"bankName":"DBBL BANK","accountHolderName":"MD SHAHAB UDDIN MAHAMUD ","accountNumber":"121 111 5678987","branchName":"SYLHET BRANCH"}', 1000.00, NULL, 'completed', NULL, 'Payout completed for withdrawal request', '2026-08-14 00:00:00+00', '2026-08-11 21:44:12.204207+00', '2026-08-14 20:28:58.777+00');
INSERT INTO public.payments VALUES ('91cf8fcd-9927-49dd-8ed8-c10afca3ac22', 'SEXY6JDWEP', 'SETJ1RPUO8', 'REQ-1782673062044-SETZG1UR', 'bkash', '01789500226', NULL, '01310673600', NULL, 200.00, NULL, 'completed', 'DST4GCXZ46', 'আপনার রিকয়েস্ট ২০০ টাকা আপনার বিকাশে দেওয়া হয়েছে ', '2026-06-28 18:57:42.044+00', '2026-06-28 18:57:42.153006+00', '2026-06-28 19:03:05.73+00');
INSERT INTO public.payments VALUES ('587a8830-b612-4ec3-841a-78c5624b88a0', 'SEQ05SFOE8', 'SEQQTONWQD', 'BAL-1787728867273-SEUG2HEU', 'bkash', NULL, NULL, NULL, NULL, 1200.00, NULL, 'credited', NULL, 'Service charge added for job #SEFYEJ8TEH', '2026-08-26 07:21:07.274+00', '2026-08-26 07:21:07.864592+00', '2026-08-26 07:21:07.864592+00');
INSERT INTO public.payments VALUES ('b28505a4-40b8-48d0-9b7a-5e2bc424a5cf', 'SEXPXOW8EZ', 'SETJ1RPUO8', 'REQ-1783284379807-SE2DFCE9', 'bkash', '01789500229', NULL, '01310673600', NULL, 300.00, NULL, 'completed', 'SEJXM394J', '', '2026-07-05 20:46:19.807+00', '2026-07-05 20:46:19.917117+00', '2026-07-05 20:56:30.487+00');
INSERT INTO public.payments VALUES ('146fc047-e437-4f9f-a48d-133c99528bd7', 'SECIKPWG27', 'SETJ1RPUO8', 'BAL-1786483777625-SEQ2C709', 'rocket', NULL, NULL, NULL, NULL, 500.00, NULL, 'credited', NULL, 'Service charge added for job #SEJMWXJTY0', '2026-08-11 21:29:37.625+00', '2026-08-11 21:29:38.189278+00', '2026-08-11 21:29:38.189278+00');
INSERT INTO public.payments VALUES ('735b1efa-ecaa-4bc0-8701-130617cba6e4', 'SE5MAGIAWK', 'SEQQTONWQD', 'BAL-1785185116181-SEG0BBE5', 'bkash', NULL, NULL, NULL, NULL, 100.00, NULL, 'credited', NULL, 'Service charge added for job #SE0L1SFOOH', '2026-07-27 20:45:16.181+00', '2026-07-27 20:45:16.72817+00', '2026-07-27 20:45:16.72817+00');
INSERT INTO public.payments VALUES ('3b705092-08e2-4e12-95f5-e920ebfb9455', 'SEXSB83Q3N', 'SEQQTONWQD', 'BAL-1785184691409-SEEKJ5AT', 'bkash', NULL, NULL, NULL, NULL, 500.00, NULL, 'credited', NULL, 'Service charge added for job #SE9P4TN8HF', '2026-07-27 20:38:11.409+00', '2026-07-27 20:38:11.974689+00', '2026-07-27 20:38:11.974689+00');
INSERT INTO public.payments VALUES ('396081bf-e0ec-421b-af50-da451d8f7385', 'SEH1JN055M', 'SETJ1RPUO8', 'REQ-1783285540186-SETVBW71', 'bkash', '01789500226', NULL, '01310673600', NULL, 100.00, NULL, 'completed', 'DFG46XZD65', '', '2026-07-05 21:05:40.186+00', '2026-07-05 21:05:40.305281+00', '2026-07-05 21:09:01.798+00');
INSERT INTO public.payments VALUES ('cce19728-c4f5-44f6-9ac5-5a4e7a8b68c5', 'SE9HRRZAN3', 'SETJ1RPUO8', 'BAL-1783908775810-SE3DNJRI', 'bkash', NULL, NULL, NULL, NULL, 300.00, NULL, 'credited', NULL, 'Good jo ', '2026-07-13 02:12:55.81+00', '2026-07-13 02:12:56.368173+00', '2026-07-13 02:12:56.368173+00');
INSERT INTO public.payments VALUES ('16bc8894-e587-40a5-9e98-284aceb2a4f3', 'SEKRYOTC9J', 'SETJ1RPUO8', 'BAL-1783283996844-SEZS1DMU', 'bkash', NULL, NULL, NULL, NULL, 800.00, NULL, 'credited', NULL, 'আপনার সার্ভিস আই ডি পেমেন্ট টা SEP7WH2OO3 টাকা আপনার একাউন্ট যোগ করা হয়েভহে', '2026-07-05 20:39:56.844+00', '2026-07-05 20:39:57.439731+00', '2026-07-05 20:39:57.439731+00');
INSERT INTO public.payments VALUES ('d4bbc375-a06f-4916-9348-5417f2809b03', 'SE6EBE155I', 'SETJ1RPUO8', 'BAL-1784635576256-SEQF17OR', 'bkash', NULL, NULL, NULL, NULL, 2000.00, NULL, 'credited', NULL, 'Service charge added for job #SECT2696HO', '2026-07-21 12:06:16.256+00', '2026-07-21 12:06:16.813172+00', '2026-07-21 12:06:16.813172+00');
INSERT INTO public.payments VALUES ('8498d900-9423-42a7-8859-9c56046a6a1f', 'SE7NHV93JP', 'SETJ1RPUO8', 'BAL-1784635586913-SE6NBT0G', 'bkash', NULL, NULL, NULL, NULL, 1000.00, NULL, 'credited', NULL, 'Service charge added for job #SEVWV8BY6C', '2026-07-21 12:06:26.913+00', '2026-07-21 12:06:27.509662+00', '2026-07-21 12:06:27.509662+00');
INSERT INTO public.payments VALUES ('ecade6f5-9062-417b-a116-da885ce79016', 'SEGH78WGHK', 'SETJ1RPUO8', 'REQ-1783908454787-SEZO3JP8', 'bkash', '01310673600', NULL, '01310673600', NULL, 650.00, NULL, 'completed', 'DFR12KDJTKS', 'Bsnskckxdn', '2026-07-13 02:07:34.787+00', '2026-07-13 02:07:34.904329+00', '2026-07-13 02:11:46.514+00');
INSERT INTO public.payments VALUES ('f7c0ad57-03df-4978-ad02-5ced6e455cf7', 'SE8F7EJ5S1', 'SETJ1RPUO8', 'BAL-1776454600040-SES5ITQ2', 'bkash', NULL, NULL, NULL, NULL, 1800.00, NULL, 'credited', NULL, 'সার্ভিস আই ডি  SE9GMIWGQT পেমেন্ট ব্যালেন্স এড করা হয়েছে। ', '2026-04-17 19:36:40.04+00', '2026-04-17 19:36:40.616796+00', '2026-04-17 19:36:40.616796+00');
INSERT INTO public.payments VALUES ('70487a07-e2e5-4121-a1c8-14d0a9a7c2e1', 'SEFP4O8DN8', 'SETJ1RPUO8', 'BAL-1788207836976-SE7RR5T2', 'bkash', NULL, NULL, NULL, NULL, 20.00, NULL, 'credited', NULL, 'Service charge added for job #SE72GC7OCZ', '2026-08-31 20:23:56.976+00', '2026-08-31 20:23:57.527217+00', '2026-08-31 20:23:57.527217+00');
INSERT INTO public.payments VALUES ('e7b73e60-e405-4195-9d76-da5b20c1f351', 'SEV4XTZEZG', 'SETJ1RPUO8', 'BAL-1788121999490-SEBUXTXT', 'bkash', NULL, NULL, NULL, NULL, 10.00, NULL, 'credited', NULL, 'Service charge added for job #SEGVPMMAP8', '2026-08-30 20:33:19.49+00', '2026-08-30 20:33:20.086724+00', '2026-08-30 20:33:20.086724+00');
INSERT INTO public.payments VALUES ('602d56db-e14e-4107-ace3-b9c3b3ab7d78', 'SEF5RBUJZH', 'SETJ1RPUO8', 'BAL-1788244187148-SEAYC7EH', 'bkash', NULL, NULL, NULL, NULL, 320.00, NULL, 'credited', NULL, 'Service charge added for job #SEKXUBYAED', '2026-09-01 06:29:47.148+00', '2026-09-01 06:29:47.700306+00', '2026-09-01 06:29:47.700306+00');
INSERT INTO public.payments VALUES ('32f01eb0-689a-4d39-a8d7-8d94fd0a34be', 'SEVAR0ORTB', 'SETJ1RPUO8', 'BAL-1788207870368-SE4705VP', 'bkash', NULL, NULL, NULL, NULL, 10.00, NULL, 'credited', NULL, 'Service charge added for job #SEZO9YBPE3', '2026-08-31 20:24:30.368+00', '2026-08-31 20:24:30.923394+00', '2026-08-31 20:24:30.923394+00');
INSERT INTO public.payments VALUES ('74465864-6ae7-4894-8703-665587e938f5', 'SE31CD5TO8', 'SETJ1RPUO8', 'REQ-1788845684827-SED0LXNG', 'bkash', NULL, NULL, '01310673600', NULL, 300.00, NULL, 'requested', NULL, 'Ajgent plz pey', '2026-09-08 05:34:44.827+00', '2026-09-08 05:34:44.941206+00', '2026-09-08 05:34:44.941206+00');
INSERT INTO public.payments VALUES ('a47590df-ec4d-4830-a2dc-e80888213ebe', 'SE85Y2VOSN', 'SETJ1RPUO8', 'REQ-1788803917313-SEAJ533Y', 'bkash', '01310673600', NULL, '01310673600', NULL, 200.00, NULL, 'completed', 'Sdergkdlc', 'Payout completed for withdrawal request', '2026-09-08 00:00:00+00', '2026-09-07 17:58:37.423278+00', '2026-09-08 05:41:07.76+00');


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.products VALUES ('68e08972-cc87-4516-9f65-d4593cd42d3a', '44422a59-fb99-427a-a2d4-b99df70bc437', 'ips', 'SEPI 1050 VA DSP SINE WAVE IPS', 1, 12000.00, '2026-04-28 07:02:01.997+00', 24, '2026-05-02 13:52:29.548827+00', '2026-05-02 13:52:29.548827+00', '2026-08-18 14:09:30.378099+00');
INSERT INTO public.products VALUES ('6f8ef096-7f38-47e4-ac50-84f834e594ae', 'dab4ff50-dddb-4643-809a-46f47609429b', 'ips', 'SEPI 1050 VA DSP SINE WAVE IPS', 1, 12500.00, '2026-04-27 13:34:33.913+00', 24, '2026-05-02 13:53:12.564535+00', '2026-05-02 13:53:12.564535+00', '2026-08-18 14:09:30.378099+00');
INSERT INTO public.products VALUES ('c768d9a6-98f0-441b-bcfb-922368719ff1', '489ed7cb-8126-4857-8866-395b43f9d5cf', 'ips', 'SEPI 650 VA', 1, 8800.00, '2026-05-02 09:04:22.739+00', 24, '2026-05-03 17:44:19.385538+00', '2026-05-03 17:44:19.385538+00', '2026-08-18 14:09:30.378099+00');
INSERT INTO public.products VALUES ('88405d72-9958-40b6-b1c1-bec052ea61b6', '489ed7cb-8126-4857-8866-395b43f9d5cf', 'battery', 'EVON 130 AH VATTERY', 1, 17800.00, '2026-05-02 09:06:20.922+00', 18, '2026-05-03 17:44:19.385538+00', '2026-05-03 17:44:19.385538+00', '2026-08-18 14:09:30.378099+00');
INSERT INTO public.products VALUES ('aef6fa31-f396-4098-9a4f-3dc65c414181', '489ed7cb-8126-4857-8866-395b43f9d5cf', 'others', '1.3 RM RA 25 F''', 1, 450.00, '2026-05-02 09:07:48.198+00', 0, '2026-05-03 17:44:19.385538+00', '2026-05-03 17:44:19.385538+00', '2026-08-18 14:09:30.378099+00');
INSERT INTO public.products VALUES ('60b4517b-4d3a-4a08-8b94-7cff8a183429', '489ed7cb-8126-4857-8866-395b43f9d5cf', 'others', '13 AH  POWER BROAD', 1, 250.00, '2026-05-02 09:09:09.781+00', 0, '2026-05-03 17:44:19.385538+00', '2026-05-03 17:44:19.385538+00', '2026-08-18 14:09:30.378099+00');
INSERT INTO public.products VALUES ('41325ec8-6344-4a59-8342-b62d34026d42', '489ed7cb-8126-4857-8866-395b43f9d5cf', 'others', '13 AH 3 PLUG', 1, 100.00, '2026-05-02 09:18:27.251+00', 0, '2026-05-03 17:44:19.385538+00', '2026-05-03 17:44:19.385538+00', '2026-08-18 14:09:30.378099+00');
INSERT INTO public.products VALUES ('9a770a03-5dc6-4558-9a11-adb8c3687bc6', '0610d99b-214c-4f11-b49e-33b921972de3', 'ips', 'SEPI 1050 VA DSP SINE WAVE IPS  SC EX 2000 ', 1, 12000.00, '2026-07-29 07:24:14.331+00', 24, '2026-08-01 16:04:10.21157+00', '2026-08-01 16:04:10.21157+00', '2026-08-18 14:09:30.378099+00');
INSERT INTO public.products VALUES ('556877c7-1dbb-4069-b9d9-ffff551ac5dc', '0610d99b-214c-4f11-b49e-33b921972de3', 'battery', 'LEAD POWER HPD 220 AH BATTARY ', 1, 25000.00, '2026-07-31 15:10:49.954+00', 18, '2026-08-01 16:04:10.21157+00', '2026-08-01 16:04:10.21157+00', '2026-08-18 14:09:30.378099+00');
INSERT INTO public.products VALUES ('d3bfb3c9-9eb8-43bb-a8bd-03e70d081686', '6549ea70-4530-4966-887a-8b0323f268dd', 'ips', 'SEPI 1050 VA DSP SINE WAVE IPS', 1, 10000.00, '2026-05-01 00:00:00+00', 24, '2026-05-03 17:47:33.755012+00', '2026-05-03 17:47:33.755012+00', '2026-08-18 14:09:30.378099+00');
INSERT INTO public.products VALUES ('c9a2fcc6-7cbd-4dc9-9392-57599af61338', '707f11df-a6e1-4f7c-b413-40a8407fbb29', 'ips', 'SEPI 850 VA DSP SINE WAVE IPS ', 1, 10600.00, '2026-04-17 19:15:54.774+00', 24, '2026-04-17 19:19:14.81171+00', '2026-04-17 19:19:14.81171+00', '2026-08-18 14:09:30.378099+00');
INSERT INTO public.products VALUES ('0f2d7ade-6a55-49f2-b85e-5fc294645034', '707f11df-a6e1-4f7c-b413-40a8407fbb29', 'battery', 'Lead power  160 AH battery', 1, 21400.00, '2026-04-17 19:18:09.038+00', 18, '2026-04-17 19:19:14.81171+00', '2026-04-17 19:19:14.81171+00', '2026-08-18 14:09:30.378099+00');
INSERT INTO public.products VALUES ('d4274a34-a2d4-401d-b3c7-16fd20e8f5e7', '6549ea70-4530-4966-887a-8b0323f268dd', 'battery', 'HAMKO HPD 130 AH  BATTERY', 1, 19900.00, '2026-05-01 00:00:00+00', 18, '2026-05-03 17:47:33.755012+00', '2026-05-03 17:47:33.755012+00', '2026-08-18 14:09:30.378099+00');
INSERT INTO public.products VALUES ('8d592dc1-7f58-43cf-8684-6856b0d3481b', 'ef554045-0aff-442f-a0c4-c2a30a366e4f', 'ips', 'SEPI1050 VA DSP SINE WAVE IPS ', 1, 14800.00, '2026-04-17 19:10:46.413+00', 6, '2026-09-05 15:10:52.456727+00', '2026-09-05 15:10:52.456727+00', '2026-09-05 15:10:52.456727+00');
INSERT INTO public.products VALUES ('b92abb65-7dbc-413f-b763-8f18f093e46f', '1ea5fa1a-5e75-42f0-9e08-bb92d4123814', 'ips', 'SEPI 1050 VA SQ IPS KST', 1, 12000.00, '2026-08-17 08:09:53.493+00', 24, '2026-09-05 15:12:06.614507+00', '2026-09-05 15:12:06.614507+00', '2026-09-05 15:12:06.614507+00');
INSERT INTO public.products VALUES ('6edab30f-0a44-4c9c-ae27-e778883f8387', '33f42b37-7e49-4d0f-93c6-923147711c30', 'ips', 'SEPI 1050 VA DSP SINE WAVE IPS', 1, 10000.00, '2026-05-05 00:00:00+00', 24, '2026-05-06 16:52:25.380941+00', '2026-05-06 16:52:25.380941+00', '2026-08-18 14:09:30.378099+00');
INSERT INTO public.products VALUES ('c37dd1b4-cc6d-4900-ae7b-625204914e44', '2d1eec12-7061-4dc7-8d7a-dd29495874ca', 'ips', 'SEPI 1050 VA DSP SINE WAVE  IPS ', 1, 10000.00, '2026-04-18 07:13:18.447+00', 24, '2026-04-18 08:41:47.067008+00', '2026-04-18 08:41:47.067008+00', '2026-08-18 14:09:30.378099+00');
INSERT INTO public.products VALUES ('14969f14-4d72-4b07-a59a-72e39b198fa0', '2d1eec12-7061-4dc7-8d7a-dd29495874ca', 'battery', 'Hamko 130 HPD Battery ', 1, 19500.00, '2026-04-18 07:15:51.286+00', 18, '2026-04-18 08:41:47.067008+00', '2026-04-18 08:41:47.067008+00', '2026-08-18 14:09:30.378099+00');
INSERT INTO public.products VALUES ('46a237d4-5777-4aa6-8652-7fb27f2c3ba2', '33f42b37-7e49-4d0f-93c6-923147711c30', 'battery', 'EVON BATTERY 150 AH  22 M WARRENTY', 1, 19500.00, '2026-05-05 00:00:00+00', 24, '2026-05-06 16:52:25.380941+00', '2026-05-06 16:52:25.380941+00', '2026-08-18 14:09:30.378099+00');
INSERT INTO public.products VALUES ('4bd307a5-cd6f-4848-98ec-3c3fe3bf0ac0', '1ea5fa1a-5e75-42f0-9e08-bb92d4123814', 'battery', 'EVON AB 29 PL BAT KST', 1, 26000.00, '2026-08-17 08:11:17.259+00', 12, '2026-09-05 15:12:06.614507+00', '2026-09-05 15:12:06.614507+00', '2026-09-05 15:12:06.614507+00');
INSERT INTO public.products VALUES ('fbfb47b4-384d-4d47-9d31-bed9e7ff8f1f', 'bffe9060-f826-4b1a-b35c-503dddc47e47', 'ips', 'SEPI 650 VA DSP SINE WAVE IPS', 1, 8800.00, '2026-07-21 06:41:35.271+00', 24, '2026-09-05 15:12:22.715647+00', '2026-09-05 15:12:22.715647+00', '2026-09-05 15:12:22.715647+00');
INSERT INTO public.products VALUES ('bec5c854-34b2-4957-822a-2d7ef46f61b8', 'bffe9060-f826-4b1a-b35c-503dddc47e47', 'battery', 'EVON HPD 130 AH BATTERY', 1, 17500.00, '2026-07-21 06:45:38.463+00', 18, '2026-09-05 15:12:22.715647+00', '2026-09-05 15:12:22.715647+00', '2026-09-05 15:12:22.715647+00');
INSERT INTO public.products VALUES ('55cd5bcb-f564-47aa-9934-4550d81e5d0e', 'bffe9060-f826-4b1a-b35c-503dddc47e47', 'others', '1.3 RM CABLE   80 F WIRE', 1, 1080.00, '2026-07-21 06:47:24.524+00', 0, '2026-09-05 15:12:22.715647+00', '2026-09-05 15:12:22.715647+00', '2026-09-05 15:12:22.715647+00');
INSERT INTO public.products VALUES ('31cc5c7f-5e3a-490d-b4e5-decd7d86990c', 'e5c146a4-e3a2-44d6-916e-6b29247cac26', 'ips', 'SEPI- 1050 VA DSP SINE WAVE IPS 2.5V', 1, 11800.00, '2026-04-18 11:40:42.564+00', 24, '2026-04-18 12:02:45.851228+00', '2026-04-18 12:02:45.851228+00', '2026-08-18 14:09:30.378099+00');
INSERT INTO public.products VALUES ('6792e1ce-925f-4ef2-859b-45695aa9c65b', 'e5c146a4-e3a2-44d6-916e-6b29247cac26', 'battery', 'RIMSO 200 AH BATTERY', 1, 25500.00, '2026-04-18 11:45:21.779+00', 24, '2026-04-18 12:02:45.851228+00', '2026-04-18 12:02:45.851228+00', '2026-08-18 14:09:30.378099+00');
INSERT INTO public.products VALUES ('a6816299-e172-4540-b9aa-2388db19b266', 'e5c146a4-e3a2-44d6-916e-6b29247cac26', 'others', 'BATTERY BOX', 1, 700.00, '2026-04-18 11:46:05.619+00', 0, '2026-04-18 12:02:45.851228+00', '2026-04-18 12:02:45.851228+00', '2026-08-18 14:09:30.378099+00');
INSERT INTO public.products VALUES ('e59c32cf-5750-4f5b-a635-8cd8c4765922', 'f3a13a4a-0d6f-4bdd-b649-b9f2fc792da0', 'ips', 'SEPI 1050 VA DSP SINE WAVE IPS ', 1, 12000.00, '2026-07-02 19:18:47.538+00', 24, '2026-07-07 15:44:12.363199+00', '2026-07-07 15:44:12.363199+00', '2026-08-18 14:09:30.378099+00');
INSERT INTO public.products VALUES ('c066d895-edee-4c97-a92d-2239d25ce2d9', 'd2eb9038-494d-4fde-819a-8800327ef101', 'ips', 'SEPI 650 VA DSP SINE WAVE IPS EX 1250 VA IPS  6000 DOU', 1, 14000.00, '2026-05-23 15:13:51.208+00', 24, '2026-07-08 06:41:06.250487+00', '2026-07-08 06:41:06.250487+00', '2026-08-18 14:09:30.378099+00');
INSERT INTO public.products VALUES ('341748ba-13ff-4e86-8ca4-99f608fab881', 'd2eb9038-494d-4fde-819a-8800327ef101', 'battery', 'ENAGY EVON HPD 150 AH', 1, 17500.00, '2026-05-23 15:24:35.23+00', 24, '2026-07-08 06:41:06.250487+00', '2026-07-08 06:41:06.250487+00', '2026-08-18 14:09:30.378099+00');
INSERT INTO public.products VALUES ('462d56d0-0735-4c0a-8418-336049522447', '2b789a62-f38d-430f-8b20-1abd25bb620e', 'ips', 'SEPI 1250 VA DSP IPS 850 VA EXCHANGE 8000 TK(-) ', 1, 14000.00, '2026-06-29 00:00:00+00', 24, '2026-07-11 14:49:32.42344+00', '2026-07-11 14:49:32.42344+00', '2026-08-18 14:09:30.378099+00');
INSERT INTO public.products VALUES ('1efb9f9a-4828-4ac3-9b20-5d2c6263b121', 'e1885dbd-eb47-4a4d-a8c6-15ae93af57f0', 'ips', 'SE POWER 1050 VA DSP SINE WAVE IPS', 1, 12500.00, '2026-07-13 13:52:51.499+00', 24, '2026-07-13 13:56:03.215614+00', '2026-07-13 13:56:03.215614+00', '2026-08-18 14:09:30.378099+00');
INSERT INTO public.products VALUES ('f190a78e-f88d-438f-a023-c97423e0e1a4', 'bc486d16-fee2-42ef-91b0-e49140b3fb10', 'ips', 'LUMINUS 1250 VA 12 V IPS', 1, 16500.00, '2026-04-21 11:17:34.015+00', 24, '2026-04-21 11:21:26.101054+00', '2026-04-21 11:21:26.101054+00', '2026-08-18 14:09:30.378099+00');
INSERT INTO public.products VALUES ('68bffbe6-679a-490d-826c-0ca76f8ae912', '0d06758a-b381-4327-9f4d-74d8dff949ff', 'ips', 'SEP 2 KVA 24 V DSP SINE WAVE IPS', 1, 26000.00, '2026-05-16 07:00:03.305+00', 24, '2026-05-18 09:44:28.406217+00', '2026-05-18 09:44:28.406217+00', '2026-08-18 14:09:30.378099+00');
INSERT INTO public.products VALUES ('7406944c-13ee-416d-8b89-d66279a1ba33', '0d06758a-b381-4327-9f4d-74d8dff949ff', 'battery', 'LEAD POWER HPD 165 AH RKSE.02.184-185', 1, 45000.00, '2026-05-16 07:03:50.151+00', 18, '2026-05-18 09:44:28.406217+00', '2026-05-18 09:44:28.406217+00', '2026-08-18 14:09:30.378099+00');
INSERT INTO public.products VALUES ('2af08a91-b042-44af-9ae9-62768634aa7e', '0d06758a-b381-4327-9f4d-74d8dff949ff', 'others', '0.2 RM TAR 1 COILE', 1, 6300.00, '2026-05-16 07:13:31.141+00', 0, '2026-05-18 09:44:28.406217+00', '2026-05-18 09:44:28.406217+00', '2026-08-18 14:09:30.378099+00');
INSERT INTO public.products VALUES ('e076e15f-cd28-4921-a30b-8709a4f46fd5', '0d06758a-b381-4327-9f4d-74d8dff949ff', 'others', '13/15 AH POWER BROAD+ UNDER B', 1, 390.00, '2026-05-16 07:13:54.464+00', 0, '2026-05-18 09:44:28.406217+00', '2026-05-18 09:44:28.406217+00', '2026-08-18 14:09:30.378099+00');
INSERT INTO public.products VALUES ('641e019c-102d-4d18-a34e-204fc1c9802b', '0de684b4-97b4-49bc-bf63-45b029751d83', 'ips', 'SEPI-1050 VA DSP SINE WAVW IPS', 1, 11600.00, '2026-04-23 00:00:00+00', 24, '2026-04-22 17:39:36.06466+00', '2026-04-22 17:39:36.06466+00', '2026-08-18 14:09:30.378099+00');
INSERT INTO public.products VALUES ('50ffaf1c-e90e-4d09-8cef-08462dbb7548', '0de684b4-97b4-49bc-bf63-45b029751d83', 'battery', 'SIFE POWER IND 200 AH BATTERY', 1, 29500.00, '2026-04-23 00:00:00+00', 18, '2026-04-22 17:39:36.06466+00', '2026-04-22 17:39:36.06466+00', '2026-08-18 14:09:30.378099+00');
INSERT INTO public.products VALUES ('6f8dae39-edcf-46a7-875e-bb99247ffac3', '0d06758a-b381-4327-9f4d-74d8dff949ff', 'others', '15 AH 3 PLACK', 1, 150.00, '2026-05-16 07:14:22.028+00', 0, '2026-05-18 09:44:28.406217+00', '2026-05-18 09:44:28.406217+00', '2026-08-18 14:09:30.378099+00');
INSERT INTO public.products VALUES ('fd289b31-54cc-411c-add3-e7698a8df3c2', '9f1aa405-c7ea-44bd-9cee-4c385551c08c', 'ips', 'SEPI 1050 VA DSP SINE WEEAVE IPS', 1, 12500.00, '2026-05-25 17:04:31.467+00', 24, '2026-05-26 09:44:30.195162+00', '2026-05-26 09:44:30.195162+00', '2026-08-18 14:09:30.378099+00');
INSERT INTO public.products VALUES ('d86133ef-9567-4114-a827-483d36bc958c', '9f1aa405-c7ea-44bd-9cee-4c385551c08c', 'battery', 'HAMKO HPD 165 AH BATTERY', 1, 25500.00, '2026-05-25 17:07:06.162+00', 18, '2026-05-26 09:44:30.195162+00', '2026-05-26 09:44:30.195162+00', '2026-08-18 14:09:30.378099+00');
INSERT INTO public.products VALUES ('d49fe6bb-b2c1-4894-993a-dfcfec25bc58', 'a74d2fcb-f4e8-4192-a8fd-c1205fdefc5d', 'stabilizer', 'STB1000 VA 115V TO 280V', 1, 3500.00, '2026-05-30 11:03:08.987+00', 24, '2026-05-30 11:09:03.851788+00', '2026-05-30 11:09:03.851788+00', '2026-08-18 14:09:30.378099+00');
INSERT INTO public.products VALUES ('96bd7f74-2a18-4cab-9072-fe39a7a64cc6', 'f42c98fc-4090-42c9-919e-3b3e5ec87789', 'ips', 'SEPI 1050 VA DSP SINE WAVE IPS ', 1, 15000.00, '2026-07-14 07:22:31.266+00', 24, '2026-07-14 07:28:19.974193+00', '2026-07-14 07:28:19.974193+00', '2026-08-18 14:09:30.378099+00');
INSERT INTO public.products VALUES ('071e7c71-ec1f-459b-a0e6-8ec3aa99994e', '79115ad3-8a0f-4d99-a384-21d9bb3269e4', 'ips', 'SEPI-1050 VA DSP SINE WAVE IPS 2.5 V', 1, 10000.00, '2026-04-21 00:00:00+00', 24, '2026-04-24 10:46:22.384935+00', '2026-04-24 10:46:22.384935+00', '2026-08-18 14:09:30.378099+00');
INSERT INTO public.products VALUES ('2b4fd01e-124d-46a9-8a11-0b75c1b3a4cb', '79115ad3-8a0f-4d99-a384-21d9bb3269e4', 'battery', 'HAMKO HPD 130 AH BATTERY', 1, 19500.00, '2026-04-21 00:00:00+00', 18, '2026-04-24 10:46:22.384935+00', '2026-04-24 10:46:22.384935+00', '2026-08-18 14:09:30.378099+00');
INSERT INTO public.products VALUES ('c08b95f7-65e7-4c4f-b192-1582cc015daa', '6450624f-ac08-4f7c-9414-8e7549617d65', 'ips', 'SEPI 1050 VA 2.0V ', 1, 11000.00, '2026-06-08 13:09:19.108+00', 24, '2026-06-10 08:24:22.084134+00', '2026-06-10 08:24:22.084134+00', '2026-08-18 14:09:30.378099+00');
INSERT INTO public.products VALUES ('00333c0d-bafc-4e0d-817c-459a8b206213', 'c835ec86-0823-411d-a0ca-d4409939167a', 'battery', 'RIMSO 200 AH T BATTERY', 1, 29500.00, '2026-04-24 11:19:12.947+00', 24, '2026-04-24 11:26:28.232389+00', '2026-04-24 11:26:28.232389+00', '2026-08-18 14:09:30.378099+00');
INSERT INTO public.products VALUES ('25060598-e8f5-4ef8-92a1-eb45f0c89832', '07f76b09-26bf-44de-a4c3-6bb6a1e4b132', 'ips', 'SEPI 1050 VA DSPx SINE WABVE IPS', 1, 12000.00, '2026-04-23 11:56:06.353+00', 24, '2026-04-27 13:59:23.255036+00', '2026-04-27 13:59:23.255036+00', '2026-08-18 14:09:30.378099+00');
INSERT INTO public.products VALUES ('5e9cf8e3-9dd1-4199-add5-7dcaf92c3686', 'b8051e96-93cc-41ad-a32a-8561330958c7', 'ips', 'SEPI 1250 VA DSP IPS ', 1, 14500.00, '2026-04-23 00:00:00+00', 24, '2026-04-27 14:00:07.760516+00', '2026-04-27 14:00:07.760516+00', '2026-08-18 14:09:30.378099+00');
INSERT INTO public.products VALUES ('4f808e98-3071-4ea6-b850-2996dbf78ee7', 'b8051e96-93cc-41ad-a32a-8561330958c7', 'battery', 'RIMSO  220 T AH D6-13-3975', 1, 27500.00, '2026-04-23 00:00:00+00', 18, '2026-04-27 14:00:07.760516+00', '2026-04-27 14:00:07.760516+00', '2026-08-18 14:09:30.378099+00');
INSERT INTO public.products VALUES ('cd93abe3-ffc9-4366-916b-dde5787e69c8', 'c95d92b3-b39d-4346-a877-a1acced959b7', 'ips', 'SEPI 2 KV 24 V DSP SINE WAVE IPS', 1, 22500.00, '2026-04-29 00:00:00+00', 24, '2026-04-28 18:22:20.93559+00', '2026-04-28 18:22:20.93559+00', '2026-08-18 14:09:30.378099+00');
INSERT INTO public.products VALUES ('494a2147-86ef-47b1-b89a-fee9417ced91', 'bc8abf84-a450-40dd-83a7-602327c0257c', 'ips', 'SEP 850 VA DSP SINE WAVE IPS', 1, 8500.00, '2026-06-17 15:24:38.19+00', 18, '2026-06-19 19:06:20.798331+00', '2026-06-19 19:06:20.798331+00', '2026-08-18 14:09:30.378099+00');
INSERT INTO public.products VALUES ('09cd9682-3b1c-4efc-9093-8c3909438126', 'd784c616-262d-4c0a-ab41-bceb977134ee', 'ips', 'SEPI 1050 VA DSP SINE WAVE IPS', 1, 12500.00, '2026-06-14 07:25:21.728+00', 24, '2026-06-23 08:01:00.162592+00', '2026-06-23 08:01:00.162592+00', '2026-08-18 14:09:30.378099+00');
INSERT INTO public.products VALUES ('0faab7d1-77e2-4e58-a3b4-443508431c30', '115d9ed2-e529-41e4-864a-adad514f935c', 'battery', 'LEAD POWER HPD 165 AH BATTERY', 1, 20000.00, '2026-06-25 16:12:07.049+00', 18, '2026-06-25 16:14:18.931276+00', '2026-06-25 16:14:18.931276+00', '2026-08-18 14:09:30.378099+00');
INSERT INTO public.products VALUES ('25a642a2-071f-4367-be0c-4eb459d37553', 'b8d7d97d-3bfe-4a6f-ba07-1ddcfed092f6', 'ips', 'SEPI 1050 VA DSP IPS', 1, 12500.00, '2026-06-30 16:16:19.548+00', 0, '2026-07-01 13:48:55.050296+00', '2026-07-01 13:48:55.050296+00', '2026-08-18 14:09:30.378099+00');
INSERT INTO public.products VALUES ('d50ee6ed-3467-46af-b330-387eb585fe9d', 'bffe9060-f826-4b1a-b35c-503dddc47e47', 'others', 'INSTALLATION CHARGE ', 1, 1000.00, '2026-07-21 06:50:48.085+00', 0, '2026-09-05 15:12:22.715647+00', '2026-09-05 15:12:22.715647+00', '2026-09-05 15:12:22.715647+00');
INSERT INTO public.products VALUES ('5cdf09f6-2f11-45aa-ab7f-af750de4e2bf', '1940232c-5b29-468a-80af-3223482bcdb1', 'ips', 'SEPI 1050 VA DSP SINE WAVE IPS ', 1, 12500.00, '2026-09-06 16:43:11.289+00', 18, '2026-09-06 16:46:32.116762+00', '2026-09-06 16:46:32.116762+00', '2026-09-06 16:46:32.116762+00');
INSERT INTO public.products VALUES ('5a7e749b-f078-4af0-96e1-ace1aece8d23', 'c1d8a85d-dc6a-49c5-b0f5-f8710a33219a', 'ips', 'SEPI 1050 VA DSP SINE WAVE IPS ', 1, 12000.00, '2026-07-22 16:15:55.672+00', 18, '2026-07-22 16:17:43.87118+00', '2026-07-22 16:17:43.87118+00', '2026-08-18 14:09:30.378099+00');
INSERT INTO public.products VALUES ('f577e11e-aa6e-4cf3-9b34-e5be3bbb8385', '75e8a297-f929-4c3f-9395-1878f1021cce', 'ips', 'SEPI 1250 VA 2.0V DSP SINE WAVE IPS ', 1, 11500.00, '2026-06-03 14:08:51.154+00', 0, '2026-08-05 08:10:05.936986+00', '2026-08-05 08:10:05.936986+00', '2026-08-18 14:09:30.378099+00');
INSERT INTO public.products VALUES ('caec1e26-c65f-4d81-b7da-cbd25e84e3df', 'b78407f3-6b5d-43ef-b515-8b543536245a', 'ips', 'SEPI 1250 V DSP SINE WAVE IPS', 1, 14000.00, '2026-08-03 11:29:03.564+00', 24, '2026-08-05 08:14:19.236855+00', '2026-08-05 08:14:19.236855+00', '2026-08-18 14:09:30.378099+00');
INSERT INTO public.products VALUES ('d7966215-6de5-4153-bf78-3adfe3314857', '0e8ce9f5-5775-4180-ab87-4ef205df393d', 'battery', 'RK POWER HPD 200 AH BATTERY', 1, 25000.00, '2026-06-23 07:57:15.416+00', 18, '2026-07-28 09:31:02.537852+00', '2026-07-28 09:31:02.537852+00', '2026-08-18 14:09:30.378099+00');
INSERT INTO public.products VALUES ('29b9110d-b595-4c48-b356-8df81593871e', 'b78407f3-6b5d-43ef-b515-8b543536245a', 'battery', 'LEAD POWER  HPD 220 AH BATTERY', 1, 24000.00, '2026-08-03 11:31:03.471+00', 18, '2026-08-05 08:14:19.236855+00', '2026-08-05 08:14:19.236855+00', '2026-08-18 14:09:30.378099+00');
INSERT INTO public.products VALUES ('341c5ee2-2327-48de-b64a-b52ec651525e', '769f3e53-f419-4a84-a236-ff97545f89af', 'ips', 'SEPI 1050 VA DSP SINE WAVE IPS 2.0 V', 1, 10200.00, '2026-07-31 09:28:54.788+00', 24, '2026-07-31 09:31:21.557326+00', '2026-07-31 09:31:21.557326+00', '2026-08-18 14:09:30.378099+00');
INSERT INTO public.products VALUES ('fd0a580b-7239-41dd-a022-32575cc9a86f', 'fc76a6ac-35da-4c22-977c-9526ecb2a7ee', 'ips', 'Luminus 1050 ', 1, 10800.00, '2026-08-20 08:41:49.326+00', 24, '2026-08-21 11:42:44.854797+00', '2026-08-21 11:42:44.854797+00', '2026-08-21 11:42:44.854797+00');
INSERT INTO public.products VALUES ('9caa9ef9-3847-4922-b9a7-64d601acd7be', 'fc76a6ac-35da-4c22-977c-9526ecb2a7ee', 'battery', 'Evon 165 Ah battary ', 1, 21800.00, '2026-08-20 08:43:51.21+00', 18, '2026-08-21 11:42:44.854797+00', '2026-08-21 11:42:44.854797+00', '2026-08-21 11:42:44.854797+00');
INSERT INTO public.products VALUES ('08fca52a-a969-4795-87da-afac7a7a95c0', 'fc76a6ac-35da-4c22-977c-9526ecb2a7ee', 'others', '1.3 rm tar 25 ft', 1, 375.00, '2026-08-20 08:44:55.31+00', 0, '2026-08-21 11:42:44.854797+00', '2026-08-21 11:42:44.854797+00', '2026-08-21 11:42:44.854797+00');
INSERT INTO public.products VALUES ('dc4ed4ea-d184-45dc-913f-7355601c05d2', 'fc76a6ac-35da-4c22-977c-9526ecb2a7ee', 'others', 'Power broad  3 flag ', 1, 355.00, '2026-08-20 08:44:58.62+00', 0, '2026-08-21 11:42:44.854797+00', '2026-08-21 11:42:44.854797+00', '2026-08-21 11:42:44.854797+00');
INSERT INTO public.products VALUES ('b6e61fba-8b0d-4d68-84b1-af000e39ef63', 'fc76a6ac-35da-4c22-977c-9526ecb2a7ee', 'others', 'partex battery box ', 1, 1500.00, '2026-08-20 08:47:52.283+00', 0, '2026-08-21 11:42:44.854797+00', '2026-08-21 11:42:44.854797+00', '2026-08-21 11:42:44.854797+00');
INSERT INTO public.products VALUES ('5568832e-9b0f-43bb-ae0d-5d8bd3cfa8a0', 'fc76a6ac-35da-4c22-977c-9526ecb2a7ee', 'others', 'Tep wall clip others ', 1, 150.00, '2026-08-20 08:49:17.487+00', 0, '2026-08-21 11:42:44.854797+00', '2026-08-21 11:42:44.854797+00', '2026-08-21 11:42:44.854797+00');
INSERT INTO public.products VALUES ('d79f64c0-5806-411d-b5d8-2d71f1fc3e67', '734f7bff-ad71-4345-b31f-1a703791b0b0', 'ips', 'SEPI 1050 VA DSP SINE WAVE IPS ', 1, 12000.00, '2026-07-28 08:36:57.167+00', 24, '2026-08-14 12:02:09.373526+00', '2026-08-14 12:02:09.373526+00', '2026-08-18 14:09:30.378099+00');
INSERT INTO public.products VALUES ('51937823-8150-432e-8b94-18a957840502', '734f7bff-ad71-4345-b31f-1a703791b0b0', 'battery', 'Lead power AB 29 200 AH BATTARY ', 1, 22000.00, '2026-07-28 08:38:56.432+00', 18, '2026-08-14 12:02:09.373526+00', '2026-08-14 12:02:09.373526+00', '2026-08-18 14:09:30.378099+00');
INSERT INTO public.products VALUES ('d85ceb11-885e-4113-a628-e79992b5dea2', '734f7bff-ad71-4345-b31f-1a703791b0b0', 'others', 'Battery box', 1, 900.00, '2026-08-14 12:01:12.982+00', 0, '2026-08-14 12:02:09.373526+00', '2026-08-14 12:02:09.373526+00', '2026-08-18 14:09:30.378099+00');
INSERT INTO public.products VALUES ('dae3a1eb-f54c-432b-a0b8-d190734ab0f8', 'b994cfa2-3025-4f2b-9f03-c7e45d223da5', 'ips', 'SEPI 1250 VA DSP SINE WAVE 12 IPS', 1, 13000.00, '2026-08-09 12:50:00.682+00', 24, '2026-08-14 12:03:22.922056+00', '2026-08-14 12:03:22.922056+00', '2026-08-18 14:09:30.378099+00');
INSERT INTO public.products VALUES ('17d49bf7-742c-40c9-b7d0-b39763c0479e', 'b994cfa2-3025-4f2b-9f03-c7e45d223da5', 'battery', 'VOLVO 200 AH BAATTERY', 1, 25000.00, '2026-08-09 12:52:50.753+00', 18, '2026-08-14 12:03:22.922056+00', '2026-08-14 12:03:22.922056+00', '2026-08-18 14:09:30.378099+00');
INSERT INTO public.products VALUES ('2caa3523-569c-44e6-a0e4-33efeeb3b761', 'aaa08c81-d92f-4bbf-92a4-9e0d0862f2d7', 'ips', 'SEPI 1250 VA  DSP SINE WAVE ', 1, 14000.00, '2026-08-09 16:12:37.363+00', 24, '2026-08-23 23:14:15.835525+00', '2026-08-23 23:14:15.835525+00', '2026-08-23 23:14:15.835525+00');
INSERT INTO public.products VALUES ('0b7247d6-3fd4-4c25-9ad0-5075eb0373d2', 'b3f2b947-6100-4e66-885d-ac117210f36d', 'ips', 'SEPI 850 VA DSP SINE WAVE IPS  COPPER', 1, 11800.00, '2026-08-14 00:00:00+00', 24, '2026-08-14 17:40:58.223573+00', '2026-08-14 17:40:58.223573+00', '2026-08-18 14:09:30.378099+00');
INSERT INTO public.products VALUES ('b10d2c5e-b3fc-4906-bd99-f6c2c33b8e14', 'b3f2b947-6100-4e66-885d-ac117210f36d', 'ips', 'SEPI 1250 VA DSP SINE WAVE IPS  COPPER', 1, 14500.00, '2026-08-14 17:38:53.003+00', 24, '2026-08-14 17:40:58.223573+00', '2026-08-14 17:40:58.223573+00', '2026-08-18 14:09:30.378099+00');
INSERT INTO public.products VALUES ('c9fdaec9-2231-424f-b501-77fc4b02a3e3', '0a528421-bbf4-41cf-8f92-affd73177743', 'others', 'Namaz somoy Suchi  24X48 size SL SE25WQ3214', 1, 13500.00, '2026-08-08 13:58:46.509+00', 24, '2026-08-23 23:14:42.193447+00', '2026-08-23 23:14:42.193447+00', '2026-08-23 23:14:42.193447+00');
INSERT INTO public.products VALUES ('e648dbcc-07ab-4ce6-8b58-3a7173c616f2', '4ebf1dd7-a542-488c-b3e6-4fcec3f10526', 'ips', 'SEPI 1500 VA 24 V DSP IPS', 1, 15000.00, '2026-08-23 08:42:35.13+00', 24, '2026-08-25 05:43:16.981359+00', '2026-08-25 05:43:16.981359+00', '2026-08-25 05:43:16.981359+00');
INSERT INTO public.products VALUES ('bdd39c3b-1312-4c18-b98d-13f591f61344', '4ebf1dd7-a542-488c-b3e6-4fcec3f10526', 'battery', 'EVON 120 AH  BAT', 2, 16000.00, '2026-08-23 08:50:27.724+00', 24, '2026-08-25 05:43:16.981359+00', '2026-08-25 05:43:16.981359+00', '2026-08-25 05:43:16.981359+00');
INSERT INTO public.products VALUES ('762bdd0b-9b20-431a-a7cb-17950803888a', '7d6b8ffc-571b-4423-a7e8-0dc42fe5ff75', 'stabilizer', 'STB 1000 VA DIGITAL STABILIZER', 1, 4500.00, '2026-07-23 06:48:11.394+00', 24, '2026-08-14 22:29:08.923516+00', '2026-08-14 22:29:08.923516+00', '2026-08-18 14:09:30.378099+00');
INSERT INTO public.products VALUES ('06c1650d-2c9e-440d-b1b8-422d44df3abf', 'e4d573d7-8a85-4d7f-9732-88476b35dada', 'ips', 'SEP 500 VA SQ', 1, 3500.00, '2026-08-08 08:57:00.138+00', 0, '2026-08-17 09:50:40.377072+00', '2026-08-17 09:50:40.377072+00', '2026-08-18 14:09:30.378099+00');
INSERT INTO public.products VALUES ('1b9640c4-7936-4038-a852-b8def5008c9d', 'e4d573d7-8a85-4d7f-9732-88476b35dada', 'battery', 'Riksha Dri Battery', 1, 5000.00, '2026-08-08 08:58:52.65+00', 0, '2026-08-17 09:50:40.377072+00', '2026-08-17 09:50:40.377072+00', '2026-08-18 14:09:30.378099+00');
INSERT INTO public.products VALUES ('500a7f74-1bc4-49a5-a93d-e75f2e0ebf83', 'e4d573d7-8a85-4d7f-9732-88476b35dada', 'others', 'Fitmg 1.0 Rm 30 F tar', 1, 350.00, '2026-08-08 08:59:35.289+00', 0, '2026-08-17 09:50:40.377072+00', '2026-08-17 09:50:40.377072+00', '2026-08-18 14:09:30.378099+00');
INSERT INTO public.products VALUES ('e286df34-80c7-4d22-bee9-6d84b47d92c6', 'e4d573d7-8a85-4d7f-9732-88476b35dada', 'others', 'Power Broad 3 Plaack', 1, 300.00, '2026-08-08 09:00:25.667+00', 0, '2026-08-17 09:50:40.377072+00', '2026-08-17 09:50:40.377072+00', '2026-08-18 14:09:30.378099+00');
INSERT INTO public.products VALUES ('017310ec-5059-4f4b-86cb-eab6d1d81bbc', 'f7653357-36ff-4211-874e-63de9433de9d', 'ips', 'SEPI 1250 VA  DSP SINE WAVE IPS ', 1, 14000.00, '2026-08-30 09:52:29.48+00', 24, '2026-08-30 09:59:30.614032+00', '2026-08-30 09:59:30.614032+00', '2026-08-30 09:59:30.614032+00');
INSERT INTO public.products VALUES ('26bcb5dc-5907-4579-942f-9946c12341e5', 'f7653357-36ff-4211-874e-63de9433de9d', 'battery', 'HAMKO HPD 200 AH BATTARY ', 1, 26500.00, '2026-08-30 09:54:18.413+00', 18, '2026-08-30 09:59:30.614032+00', '2026-08-30 09:59:30.614032+00', '2026-08-30 09:59:30.614032+00');
INSERT INTO public.products VALUES ('6f8a1ddb-6b5f-4573-ba05-82964f3782cf', '2a44901f-b190-4ab8-9005-21807f52f757', 'ips', 'SEPI 650 VA DSP SINE WAVE IPS', 1, 8000.00, '2026-08-30 17:23:43.63+00', 24, '2026-08-30 17:26:20.774582+00', '2026-08-30 17:26:20.774582+00', '2026-08-30 17:26:20.774582+00');
INSERT INTO public.products VALUES ('ab8ff264-f018-4a7a-b17e-65c9946056b8', '0e758aca-1bec-4f97-b523-43549cd276cd', 'ips', 'SEPI 1050 VA DSP SINE WAVE IPS', 1, 12000.00, '2026-08-28 13:46:24.554+00', 24, '2026-08-31 18:07:02.698175+00', '2026-08-31 18:07:02.698175+00', '2026-08-31 18:07:02.698175+00');


--
-- Data for Name: referralBonuses; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public."referralBonuses" VALUES ('ff11c478-3c71-45a6-8436-7d4070c2324f', 'SEWCFAWBYM', '1045326210181059', 'SEG5QGTK7I', 'Ripa Mahamud', 32000.00, 1600.00, 640.00, '2026-04-17 19:19:16.358343+00');
INSERT INTO public."referralBonuses" VALUES ('11a0d114-abcb-4559-b364-21a996018b09', 'SEYSZ0ELKG', '2880754564502467', 'SERY4IEAOT', 'MD AMINUR ROHOMAN', 29500.00, 1475.00, 590.00, '2026-04-18 17:35:34.188572+00');
INSERT INTO public."referralBonuses" VALUES ('eac848ba-edb8-4027-8e88-0d8353e56457', 'SEYSZ0ELKG', '2880754564502467', 'SERBL8II5B', 'MD MASUD RANA', 28600.00, 1430.00, 572.00, '2026-04-21 09:20:15.666439+00');
INSERT INTO public."referralBonuses" VALUES ('05736df4-9fbc-45f1-a53b-9e3328e303bf', 'SEWCFAWBYM', '1045326210181059', 'SEC96ZEINO', 'ATIKUR ROHOMAN', 12000.00, 480.00, 240.00, '2026-07-02 19:21:18.481463+00');
INSERT INTO public."referralBonuses" VALUES ('820a8939-5991-4354-9d5a-dfe77eecc366', 'SEWCFAWBYM', '1045326210181059', 'SEH73UD7W2', 'Md Yakub ali', 12500.00, 500.00, 250.00, '2026-07-13 13:55:46.572886+00');
INSERT INTO public."referralBonuses" VALUES ('09faf06c-b739-49bc-9f41-ae0b5b5bfbbd', 'SEWCFAWBYM', '1045326210181059', NULL, 'MD SHABUDDIN MAHAMUD', 12500.00, 500.00, 250.00, '2026-07-13 14:14:44.639859+00');
INSERT INTO public."referralBonuses" VALUES ('69745431-b40f-410b-813b-e7b5e14ae9ff', 'SEP728Z15J', '3913744268896516', NULL, 'Talha Khan', 10000.00, 400.00, 200.00, '2026-07-13 17:35:34.079208+00');
INSERT INTO public."referralBonuses" VALUES ('6e6fdb5a-ba1b-42ee-a6ac-b50551d326d8', 'SEP728Z15J', '3913744268896516', NULL, 'Talha Khan', 10000.00, 400.00, 200.00, '2026-07-13 17:38:36.518042+00');
INSERT INTO public."referralBonuses" VALUES ('27f6f86c-12f8-4fb1-b82b-d586c0935695', 'SEWCFAWBYM', '1045326210181059', NULL, 'Shabuddin Mahamud', 10000.00, 400.00, 200.00, '2026-07-13 17:49:52.26084+00');
INSERT INTO public."referralBonuses" VALUES ('3f566795-0231-45e2-b83b-91e14bd4e411', 'SEWCFAWBYM', '1045326210181059', NULL, 'MD SHABUDDIN MAHAMUD', 12000.00, 480.00, 240.00, '2026-07-14 07:35:50.743764+00');
INSERT INTO public."referralBonuses" VALUES ('7d0a6b43-437c-47d8-a6cf-8d85dc6568d3', 'SEP728Z15J', '3913744268896516', NULL, 'Talha Khan', 10000.00, 400.00, 200.00, '2026-07-13 18:04:14.019914+00');
INSERT INTO public."referralBonuses" VALUES ('98d31173-ac06-4580-9996-a31352f5644d', 'SEP728Z15J', '3913744268896516', NULL, 'Talha Khan', 10000.00, 400.00, 200.00, '2026-07-14 20:58:46.238128+00');
INSERT INTO public."referralBonuses" VALUES ('5cd2433f-34b8-464e-b408-05703bce8302', 'SEWCFAWBYM', '1045326210181059', NULL, 'MD SHABUDDIN MAHAMUD', 14500.00, 580.00, 290.00, '2026-07-14 07:40:14.61788+00');
INSERT INTO public."referralBonuses" VALUES ('b1aec0ec-9c4b-44e3-8b8e-df8e47aa7367', 'SEP728Z15J', '3913744268896516', NULL, 'Talha Khan', 10000.00, 400.00, 200.00, '2026-07-14 21:10:10.64138+00');
INSERT INTO public."referralBonuses" VALUES ('531b6ebd-5b5c-491e-bc8d-a0fc84400ee0', 'SEP728Z15J', '3913744268896516', NULL, 'Talha Khan', 10000.00, 400.00, 200.00, '2026-07-16 13:54:38.468997+00');
INSERT INTO public."referralBonuses" VALUES ('50c31050-ce25-4737-ad85-63ea1daa20ca', 'SEWCFAWBYM', '1045326210181059', NULL, 'MD SHABUDDIN MAHAMUD', 12500.00, 500.00, 250.00, '2026-07-15 11:40:48.749508+00');
INSERT INTO public."referralBonuses" VALUES ('df2debf8-85b3-4112-b230-7044e7526abc', 'SEWCFAWBYM', '1045326210181059', NULL, 'Shabuddin Mahamud', 12500.00, 500.00, 250.00, '2026-07-16 10:46:23.950202+00');


--
-- Data for Name: referralPaymentRequests; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public."referralPaymentRequests" VALUES ('6712a2fd-df61-4110-b2f2-1f0700b34358', 'RPR-SE7ZAVYE', 'SEWCFAWBYM', '1045326210181059', 500.00, 'bkash', '01310673600', 'completed', 'DUVX34GXZFH', '01789500226', '', '2026-04-17 19:55:28.115025+00', '2026-04-17 20:23:14.456+00', '2026-04-17 20:23:14.456+00');
INSERT INTO public."referralPaymentRequests" VALUES ('a47e55d9-3e17-4aed-8c11-367df2f341a1', 'RPR-SEBYQR2O', 'SEWCFAWBYM', '1045326210181059', 1000.00, 'bkash', '01322247771', 'completed', 'DHO23MHASRT', '01789500226', 'প্রিয় গ্রাহক আপনার রেফারেল এর টাকা আপনার বিকাশ একাউন্ট পরিশোধ করা হয়েছে অনুগ্রহ করে ব্যালেন্স চেক করুন ', '2026-07-18 21:10:27.702844+00', '2026-07-18 21:25:06.301+00', '2026-07-18 21:25:06.301+00');
INSERT INTO public."referralPaymentRequests" VALUES ('921306e5-dd31-4c6b-8627-77ac2773d683', 'RPR-SE6XR1A6', 'SEWCFAWBYM', '1045326210181059', 100.00, 'nagad', '01310673600', 'completed', 'DEU34HGVASD', '01789500226', '', '2026-07-18 21:30:09.571491+00', '2026-08-14 21:41:44.545+00', '2026-08-14 21:41:44.545+00');


--
-- Data for Name: serviceStatusHistory; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public."serviceStatusHistory" VALUES ('59568d38-a9eb-4ea0-92b0-932170fe11b5', 'SE3L24CRRM', 'pending', 'system', NULL, NULL, NULL, '2026-09-02 04:06:08.295241+00', '2026-09-02 04:06:08.295241+00');
INSERT INTO public."serviceStatusHistory" VALUES ('4e1cec19-a1e6-4d1b-bb79-dc3f893cf55a', 'SE3NL80LG0', 'pending', 'system', NULL, NULL, NULL, '2026-04-18 08:48:27.956312+00', '2026-04-18 08:48:27.956312+00');
INSERT INTO public."serviceStatusHistory" VALUES ('785cbb71-2971-4fda-a7a0-cb13ff92828c', 'SE3NL80LG0', 'in_progress', 'system', NULL, NULL, NULL, '2026-04-18 08:58:40.182317+00', '2026-04-18 08:58:40.182317+00');
INSERT INTO public."serviceStatusHistory" VALUES ('505cd4ae-4490-426f-8974-9d4a3b386de0', 'SE3NL80LG0', 'staff_departed', 'system', NULL, NULL, NULL, '2026-04-18 12:56:41.279156+00', '2026-04-18 12:56:41.279156+00');
INSERT INTO public."serviceStatusHistory" VALUES ('26779f7b-fd60-4c5f-9781-0e9028b47fe5', 'SE3NL80LG0', 'staff_arrived', 'system', NULL, NULL, NULL, '2026-04-18 14:55:14.411771+00', '2026-04-18 14:55:14.411771+00');
INSERT INTO public."serviceStatusHistory" VALUES ('111c9b7d-3617-4701-a0b0-29cf3ad48fad', 'SE3NL80LG0', 'completed', 'system', NULL, NULL, NULL, '2026-04-18 16:29:49.939444+00', '2026-04-18 16:29:49.939444+00');
INSERT INTO public."serviceStatusHistory" VALUES ('937f8ffe-5bee-4000-9e96-c49e7f4162f9', 'SE1IMT8LUF', 'pending', 'system', NULL, NULL, NULL, '2026-04-21 10:32:25.524901+00', '2026-04-21 10:32:25.524901+00');
INSERT INTO public."serviceStatusHistory" VALUES ('9950cbbe-906d-4ddf-bfff-908c00fa374a', 'SE1IMT8LUF', 'in_progress', 'system', NULL, NULL, NULL, '2026-04-21 20:48:20.930047+00', '2026-04-21 20:48:20.930047+00');
INSERT INTO public."serviceStatusHistory" VALUES ('36aaa524-5f8c-4087-a5e0-a5a87c424969', 'SE1IMT8LUF', 'staff_departed', 'system', NULL, NULL, NULL, '2026-04-21 20:49:03.226426+00', '2026-04-21 20:49:03.226426+00');
INSERT INTO public."serviceStatusHistory" VALUES ('bdd3948a-8438-4014-b2b9-dd9381cffe6b', 'SE1IMT8LUF', 'completed', 'system', NULL, NULL, NULL, '2026-04-21 20:49:22.852245+00', '2026-04-21 20:49:22.852245+00');
INSERT INTO public."serviceStatusHistory" VALUES ('b929bcaf-1f7b-4d20-85b2-43850665a101', 'SE2OP76BL6', 'pending', 'system', NULL, NULL, NULL, '2026-04-22 20:34:55.105996+00', '2026-04-22 20:34:55.105996+00');
INSERT INTO public."serviceStatusHistory" VALUES ('1045fdc1-895b-4ab8-852d-85451a160320', 'SE2OP76BL6', 'in_progress', 'system', NULL, NULL, NULL, '2026-04-22 20:35:11.974546+00', '2026-04-22 20:35:11.974546+00');
INSERT INTO public."serviceStatusHistory" VALUES ('250e90da-40eb-498c-8764-00611d6742c6', 'SE2OP76BL6', 'staff_departed', 'system', NULL, NULL, NULL, '2026-04-22 20:35:30.484116+00', '2026-04-22 20:35:30.484116+00');
INSERT INTO public."serviceStatusHistory" VALUES ('a1883864-adb1-4431-8b95-b1b783a232a2', 'SE2OP76BL6', 'staff_arrived', 'system', NULL, NULL, NULL, '2026-04-22 20:38:03.665271+00', '2026-04-22 20:38:03.665271+00');
INSERT INTO public."serviceStatusHistory" VALUES ('09879822-e2c6-4ac6-9b68-6cfb52423f69', 'SEP6UIPHZD', 'pending', 'system', NULL, NULL, NULL, '2026-04-23 12:09:49.993401+00', '2026-04-23 12:09:49.993401+00');
INSERT INTO public."serviceStatusHistory" VALUES ('b3135890-f28b-4093-9ffc-f80d7b00e16f', 'SEP6UIPHZD', 'in_progress', 'system', NULL, NULL, NULL, '2026-04-23 12:11:45.262134+00', '2026-04-23 12:11:45.262134+00');
INSERT INTO public."serviceStatusHistory" VALUES ('0650cb37-a311-4cbf-a6b2-902384ae2ee4', 'SEP6UIPHZD', 'staff_departed', 'system', NULL, NULL, NULL, '2026-04-23 12:12:20.47154+00', '2026-04-23 12:12:20.47154+00');
INSERT INTO public."serviceStatusHistory" VALUES ('99b906bc-6e4b-4474-860b-733cb1e26195', 'SEP6UIPHZD', 'staff_arrived', 'system', NULL, NULL, NULL, '2026-04-23 12:13:08.83089+00', '2026-04-23 12:13:08.83089+00');
INSERT INTO public."serviceStatusHistory" VALUES ('e0b2cd4c-71f7-4149-b961-6ad9f1dfe80f', 'SE2OP76BL6', NULL, 'custom', 'ইলেক্ট্রিশিয়ান হোম ওয়ারিং টিম নোট', 'কাস্টমারের বাসায় পাওয়ার বোর্ড ও থ্রি প্লাগ ছিল না তাই চলে আসছি আগামী কাল যেতে বলছে', NULL, '2026-04-23 12:19:20.34474+00', '2026-04-23 12:19:20.34474+00');
INSERT INTO public."serviceStatusHistory" VALUES ('6ea0bcac-d3f3-4f55-b528-aa6f8c0cdc8d', 'SEXTF233UC', 'pending', 'system', NULL, NULL, NULL, '2026-04-24 14:11:24.453412+00', '2026-04-24 14:11:24.453412+00');
INSERT INTO public."serviceStatusHistory" VALUES ('5a9b4079-2914-422f-8742-d7ddc37ec24d', 'SEXTF233UC', 'in_progress', 'system', NULL, NULL, NULL, '2026-04-24 14:14:27.269996+00', '2026-04-24 14:14:27.269996+00');
INSERT INTO public."serviceStatusHistory" VALUES ('03f5ec11-277f-40d1-a6f4-06fa92d853e5', 'SEXTF233UC', 'staff_departed', 'system', NULL, NULL, NULL, '2026-04-24 16:14:46.014025+00', '2026-04-24 16:14:46.014025+00');
INSERT INTO public."serviceStatusHistory" VALUES ('5eba21b5-26ba-4b44-82d5-dec70b97afe5', 'SEXTF233UC', 'staff_arrived', 'system', NULL, NULL, NULL, '2026-04-24 16:15:00.252048+00', '2026-04-24 16:15:00.252048+00');
INSERT INTO public."serviceStatusHistory" VALUES ('f8a68829-63c1-4343-9ab1-5be3709760ca', 'SEP6UIPHZD', 'completed', 'system', NULL, NULL, NULL, '2026-04-24 16:15:22.387046+00', '2026-04-24 16:15:22.387046+00');
INSERT INTO public."serviceStatusHistory" VALUES ('452094b6-ddb5-470a-a5d8-708d10c7b212', 'SE2OP76BL6', 'completed', 'system', NULL, NULL, NULL, '2026-04-27 19:04:07.049014+00', '2026-04-27 19:04:07.049014+00');
INSERT INTO public."serviceStatusHistory" VALUES ('fc20d7d8-af8c-4964-9de1-2ecebb39226e', 'SEXTF233UC', 'completed', 'system', NULL, NULL, NULL, '2026-04-30 16:44:05.925043+00', '2026-04-30 16:44:05.925043+00');
INSERT INTO public."serviceStatusHistory" VALUES ('22732588-8816-4234-a970-ccbe661f7f63', 'SE81XT2D1P', 'pending', 'system', NULL, NULL, NULL, '2026-05-01 15:08:16.071075+00', '2026-05-01 15:08:16.071075+00');
INSERT INTO public."serviceStatusHistory" VALUES ('9130f4a1-5c91-4780-bf1e-1a720e892201', 'SE81XT2D1P', 'in_progress', 'system', NULL, NULL, NULL, '2026-05-01 15:08:48.836542+00', '2026-05-01 15:08:48.836542+00');
INSERT INTO public."serviceStatusHistory" VALUES ('e4bcc0c9-bcca-4290-b820-a637e8e5008f', 'SE81XT2D1P', 'staff_departed', 'system', NULL, NULL, NULL, '2026-05-01 15:10:54.943762+00', '2026-05-01 15:10:54.943762+00');
INSERT INTO public."serviceStatusHistory" VALUES ('551db1b6-fd2c-405e-ada9-eafcea3d3136', 'SE81XT2D1P', 'staff_arrived', 'system', NULL, NULL, NULL, '2026-05-01 20:20:14.269009+00', '2026-05-01 20:20:14.269009+00');
INSERT INTO public."serviceStatusHistory" VALUES ('f325fc39-d96e-4674-a05f-33e92fe6194d', 'SE81XT2D1P', 'completed', 'system', NULL, NULL, NULL, '2026-05-01 20:21:21.951291+00', '2026-05-01 20:21:21.951291+00');
INSERT INTO public."serviceStatusHistory" VALUES ('f9fb603e-280c-49d4-9448-1ebff14c73cb', 'SESPUXV13A', 'pending', 'system', NULL, NULL, NULL, '2026-05-02 14:10:11.050398+00', '2026-05-02 14:10:11.050398+00');
INSERT INTO public."serviceStatusHistory" VALUES ('c6d0517b-ac6b-4c9b-92c9-f57650decd1a', 'SESPUXV13A', 'in_progress', 'system', NULL, NULL, NULL, '2026-05-02 14:16:24.089662+00', '2026-05-02 14:16:24.089662+00');
INSERT INTO public."serviceStatusHistory" VALUES ('35331718-4404-4081-9922-74d81888dcdc', 'SESPUXV13A', 'staff_departed', 'system', NULL, NULL, NULL, '2026-05-02 14:17:31.041571+00', '2026-05-02 14:17:31.041571+00');
INSERT INTO public."serviceStatusHistory" VALUES ('9d34c0a5-99d8-4b8a-9cfb-4ec07bed9065', 'SESPUXV13A', 'staff_arrived', 'system', NULL, NULL, NULL, '2026-05-03 17:48:37.808018+00', '2026-05-03 17:48:37.808018+00');
INSERT INTO public."serviceStatusHistory" VALUES ('6458f9b0-070f-4000-88f9-636d772f654e', 'SESPUXV13A', 'completed', 'system', NULL, NULL, NULL, '2026-05-04 11:15:20.824389+00', '2026-05-04 11:15:20.824389+00');
INSERT INTO public."serviceStatusHistory" VALUES ('1b33b041-0abc-41b0-b173-e35316c79aaf', 'SEO6J6VL6J', 'pending', 'system', NULL, NULL, NULL, '2026-05-04 14:21:51.545939+00', '2026-05-04 14:21:51.545939+00');
INSERT INTO public."serviceStatusHistory" VALUES ('6dfaf388-aba8-4b12-b54e-3109f12519ea', 'SEO6J6VL6J', 'in_progress', 'system', NULL, NULL, NULL, '2026-05-05 06:37:32.536035+00', '2026-05-05 06:37:32.536035+00');
INSERT INTO public."serviceStatusHistory" VALUES ('02184e68-464e-4c67-a5ab-766a7773b41b', 'SEO6J6VL6J', 'staff_departed', 'system', NULL, NULL, NULL, '2026-05-05 06:37:48.086893+00', '2026-05-05 06:37:48.086893+00');
INSERT INTO public."serviceStatusHistory" VALUES ('064e48c5-677c-4eb4-aba3-fe5c636b4afb', 'SEO6J6VL6J', NULL, 'custom', 'এস ই ইলেকট্রনিকস টেকনিশিয়ান গন্তব্য ', 'প্রিয় গ্রাহক আমাদের টেকনিশিয়ান আপনার ঠিকানার উদ্দেশ্যে সকাল ১০ টায় রওনা দিয়েছে বর্তমানে সিলেট জেলার শায়েস্তাগঞ্জ পার হয়েছে ', NULL, '2026-05-05 08:11:23.990445+00', '2026-05-05 08:11:23.990445+00');
INSERT INTO public."serviceStatusHistory" VALUES ('c8377506-d65f-4591-a5e9-2ad40bc7f76b', 'SEO6J6VL6J', 'staff_arrived', 'system', NULL, NULL, NULL, '2026-05-06 04:14:14.928744+00', '2026-05-06 04:14:14.928744+00');
INSERT INTO public."serviceStatusHistory" VALUES ('ab6f2f8d-dc3f-41f6-a243-842599d4964f', 'SEO6J6VL6J', NULL, 'custom', 'ইলেক্ট্রিশিয়ান হোম ওয়ারিং টিম নোট', 'সম্মানিত গ্রাহক  ১.৩ আর এম ৫০ ফুট ও ১৩/১৫ এম্পিয়ার পাওয়ার বোর্ড বক্স সহ , ১৩ এম্পিয়া থ্রি প্লাক ক্যাবল ক্লিপ  এর মুল্য ১৩৬০ টা গ্রাহক মাত্র এই ইন্সট্রুমেন্ট গুলার ৬০০ টাকা দিয়েছে বাকি ৮৬০ টাকা পরিশোধ করিনি', NULL, '2026-05-06 04:32:30.89928+00', '2026-05-06 04:32:30.89928+00');
INSERT INTO public."serviceStatusHistory" VALUES ('29e7f7f4-fb3d-4644-8a41-2128998483bb', 'SEO6J6VL6J', 'completed', 'system', NULL, NULL, NULL, '2026-05-06 04:33:51.081981+00', '2026-05-06 04:33:51.081981+00');
INSERT INTO public."serviceStatusHistory" VALUES ('126df0ca-7a06-4051-941b-49bf5281b0ba', 'SEO6J6VL6J', 'completed', 'system', NULL, NULL, NULL, '2026-05-06 04:46:46.76119+00', '2026-05-06 04:46:46.76119+00');
INSERT INTO public."serviceStatusHistory" VALUES ('cf908701-10d2-4a1d-b2cd-be028c06c878', 'SEO6J6VL6J', 'staff_arrived', 'system', NULL, NULL, NULL, '2026-05-06 04:46:58.110285+00', '2026-05-06 04:46:58.110285+00');
INSERT INTO public."serviceStatusHistory" VALUES ('729dddcf-4647-4e1d-a68f-b3338c56d4a0', 'SEO6J6VL6J', 'completed', 'system', NULL, NULL, NULL, '2026-05-06 04:47:07.781499+00', '2026-05-06 04:47:07.781499+00');
INSERT INTO public."serviceStatusHistory" VALUES ('e8f4a567-1a5f-42b4-8d91-39e5e5f60d4a', 'SE3L24CRRM', 'in_progress', 'system', NULL, NULL, NULL, '2026-09-02 05:14:22.384704+00', '2026-09-02 05:14:22.384704+00');
INSERT INTO public."serviceStatusHistory" VALUES ('11006658-f6ef-47c1-8e08-04d06aaf2f4a', 'SEHWH20ZUH', 'pending', 'system', NULL, NULL, NULL, '2026-05-16 07:47:01.454345+00', '2026-05-16 07:47:01.454345+00');
INSERT INTO public."serviceStatusHistory" VALUES ('b373ce7e-ec39-4a4a-a503-31fcfa85201c', 'SEHWH20ZUH', 'in_progress', 'system', NULL, NULL, NULL, '2026-05-16 07:52:21.588536+00', '2026-05-16 07:52:21.588536+00');
INSERT INTO public."serviceStatusHistory" VALUES ('a35e4395-c90c-47cd-ac56-689e308f3591', 'SEHWH20ZUH', 'completed', 'system', NULL, NULL, NULL, '2026-05-17 07:18:05.379872+00', '2026-05-17 07:18:05.379872+00');
INSERT INTO public."serviceStatusHistory" VALUES ('674378df-7134-4455-8bbe-f853cf3af35c', 'SEDMVUT0WI', 'pending', 'system', NULL, NULL, NULL, '2026-05-18 06:19:00.264474+00', '2026-05-18 06:19:00.264474+00');
INSERT INTO public."serviceStatusHistory" VALUES ('44f176b3-2e03-4e5a-8f7d-6ed9b282b69f', 'SEDMVUT0WI', 'in_progress', 'system', NULL, NULL, NULL, '2026-05-18 07:01:12.336753+00', '2026-05-18 07:01:12.336753+00');
INSERT INTO public."serviceStatusHistory" VALUES ('1228e864-8117-4649-9fb6-b6d7feaced46', 'SEDMVUT0WI', 'staff_departed', 'system', NULL, NULL, NULL, '2026-05-18 07:15:26.366629+00', '2026-05-18 07:15:26.366629+00');
INSERT INTO public."serviceStatusHistory" VALUES ('80292cca-c353-4a4f-a8b1-f9435de779c8', 'SEDMVUT0WI', 'staff_arrived', 'system', NULL, NULL, NULL, '2026-05-18 08:50:53.867209+00', '2026-05-18 08:50:53.867209+00');
INSERT INTO public."serviceStatusHistory" VALUES ('3a96f696-a1de-4246-8464-b74a3ce6c3e9', 'SEDMVUT0WI', 'service_center', 'system', NULL, NULL, NULL, '2026-05-19 07:02:32.336917+00', '2026-05-19 07:02:32.336917+00');
INSERT INTO public."serviceStatusHistory" VALUES ('e2238809-3b7b-42d5-9bf0-a2b42961ecfc', 'SEDMVUT0WI', 'service_center_received', 'system', NULL, NULL, NULL, '2026-05-19 07:02:42.511602+00', '2026-05-19 07:02:42.511602+00');
INSERT INTO public."serviceStatusHistory" VALUES ('5c943300-bbcf-4c9e-8636-2046aa783820', 'SEDMVUT0WI', NULL, 'custom', 'পন্যটির সমস্যা সমাধানে পরিক্ষা শুরু করেছে', '‎আপনার আই পি এস টি আমাদের অফিসিয়াল দক্ষ ইঞ্জিনিয়ার টিম পরিক্ষা নিরিক্ষার কাজ শুরু করেছে আশা করছি খুব দ্রুত সমস্যাটি খুঁজে বের করবে। সেই পর্যন্ত আমাদের সময় দিয়ে সহযোগিতা করবেন ধন্যবাদ
', NULL, '2026-05-19 07:12:23.218565+00', '2026-05-19 07:12:23.218565+00');
INSERT INTO public."serviceStatusHistory" VALUES ('3e7a57b6-d4c2-4621-9901-d48a173d81e7', 'SEDMVUT0WI', NULL, 'custom', 'আপনার পন্যটির সমস্যা খুঁজে বের করা হয়েছে', 'আপনার আই পি এস টির ত্রুটি খুঁজে বের করা হয়েছে আমাদের সার্ভিস টিম খুব দ্রুত সমাধান করে আই পি এস টি রানিং করবে, আমাদের সময় দিয়ে সহযোগিতা করবেন ধন্যবাদ।', NULL, '2026-05-19 07:17:56.419492+00', '2026-05-19 07:17:56.419492+00');
INSERT INTO public."serviceStatusHistory" VALUES ('b3b89fe3-c00e-4d52-b35a-19ffa01eea15', 'SEDMVUT0WI', NULL, 'custom', 'আপনার পন্যটির সমস্যা খুঁজে বের করা হয়েছে', 'আপনার আই পি এস টির ত্রুটি খুঁজে বের করা হয়েছে আমাদের সার্ভিস টিম খুব দ্রুত সমাধান করে আই পি এস টি রানিং করবে, আমাদের সময় দিয়ে সহযোগিতা করবেন ধন্যবাদ।', NULL, '2026-05-19 07:21:49.994172+00', '2026-05-19 07:21:49.994172+00');
INSERT INTO public."serviceStatusHistory" VALUES ('249c794f-b477-4794-9fd4-a71a819b5688', 'SEDMVUT0WI', NULL, 'custom', 'আই পি এসটির ত্রুটি সারানেরার কাজ চলছে', 'আপনার আই পি এসটির যে ত্রুটি দরা পরেছে তা সারানোর কাজ শুরু করেছে আশা করছি নতুন পাটর্স গুলা পরির্বতন করলে আই পি এসটি রানিং হয়ে যাবে ,সময় দিয়ে সহযোগীতা করবেন ধন্যবাদ।
‎', NULL, '2026-05-19 07:24:24.440176+00', '2026-05-19 07:24:24.440176+00');
INSERT INTO public."serviceStatusHistory" VALUES ('b4160fb4-4146-41af-a754-e25e9d6510ef', 'SEDMVUT0WI', NULL, 'custom', '‎এস ই ইলেকট্রনিকস সার্ভিসিং সেন্টার নোট', '‎আপনার আই পি এসটির কাজ সম্পূর্ণ করা হয়েছে এখন বর্তমানে ওয়েটিং টেস্টে আছে টেস্টিং শেষ হলেই আপনাকে সার্ভিস ট্রেকিং এর মাধ্যমে জানানো হবে সময় দিয়ে সহযোগীতা করবেন।
‎
‎
‎', NULL, '2026-05-19 07:58:22.858711+00', '2026-05-19 08:07:21.206+00');
INSERT INTO public."serviceStatusHistory" VALUES ('431b63ff-198c-49cc-95c6-8f3fef861d51', 'SEDMVUT0WI', NULL, 'custom', '‎সার্ভিস সেন্টার পন্যটির  টেস্টিং সাকসেসফুল', '‎প্রিয় গ্রাহক আপনার আই পি এস টি সম্পূর্ণভাবে সার্ভিসিং করে সকল প্রকারের টেস্টিং করা শেষ হয়েছে আমরা আপনার আই পি এস টি ডেলিভারি দিতে এস ই ইলেকট্রনিকস সার্ভিস সেন্টার প্রস্তুত আছে', NULL, '2026-05-19 13:23:13.948368+00', '2026-05-19 13:23:13.948368+00');
INSERT INTO public."serviceStatusHistory" VALUES ('7a464e4e-91a5-4512-b859-1ed77960e4e4', 'SEDMVUT0WI', NULL, 'custom', 'সার্ভিস সেন্টার পণ্যটি ডেলিভারী দিতে প্রস্তুত', '‎প্রিয় গ্রাহক রাফছানুল, আপনার পন্যটির সার্ভিস আই ডি: SEYMLA0SYF আমাদের অফিসিয়াল সার্ভিস পয়েন্ট আই পি এসটি ডেলিভারী দিতে সম্পূর্ণ প্রস্তুত আছে আপনাকে অতি দ্রুত ডেলিভারী নিতে অনুরোধ করা হল।
‎', NULL, '2026-05-19 13:24:20.713281+00', '2026-05-19 13:24:20.713281+00');
INSERT INTO public."serviceStatusHistory" VALUES ('32f8189b-f4f8-447e-b598-a4a0542a3b97', 'SEDMVUT0WI', NULL, 'custom', 'টেকনিশিয়ান সার্ভিস টিম পন্যটি লাগাতে রওনা হয়েছে', 'প্রিয় গ্রাহক আপনার আই পি এস টি সার্ভিস শেষ আপনার পদত্ত ঠিকানায় লাগানোর জন্য আমাদের অফিসিয়াল সার্ভিসি টিম মেম্বার রওনা হয়েছে। আশা করিছি কিছু ক্ষনের মধ্যেই পৌঁছাবে ধন্যবাদ সময় দিয়ে সহযোগিতা করবেন ', NULL, '2026-05-19 14:46:06.972531+00', '2026-05-19 14:46:06.972531+00');
INSERT INTO public."serviceStatusHistory" VALUES ('674414fd-b572-46e5-aa61-38eae54a3411', 'SEDMVUT0WI', 'completed', 'system', NULL, NULL, NULL, '2026-05-21 07:24:23.025982+00', '2026-05-21 07:24:23.025982+00');
INSERT INTO public."serviceStatusHistory" VALUES ('5119c1a6-d86d-47d7-8412-4ae6f514b7ec', 'SE3L24CRRM', 'staff_departed', 'system', NULL, NULL, NULL, '2026-09-02 10:13:55.225966+00', '2026-09-02 10:13:55.225966+00');
INSERT INTO public."serviceStatusHistory" VALUES ('81a4a5f1-7109-435a-9253-6cfa12075d0e', 'SEPVF9ZVSB', 'pending', 'system', NULL, NULL, NULL, '2026-06-28 23:26:28.618899+00', '2026-06-28 23:26:28.618899+00');
INSERT INTO public."serviceStatusHistory" VALUES ('007c6727-3621-40f4-927b-ae888f48da8b', 'SEPVF9ZVSB', 'in_progress', 'system', NULL, NULL, NULL, '2026-06-28 23:26:58.082454+00', '2026-06-28 23:26:58.082454+00');
INSERT INTO public."serviceStatusHistory" VALUES ('39665f94-2cad-4d5d-8905-b8bc47c86f5d', 'SE3L24CRRM', 'staff_arrived', 'system', NULL, NULL, NULL, '2026-09-02 10:13:57.478144+00', '2026-09-02 10:13:57.478144+00');
INSERT INTO public."serviceStatusHistory" VALUES ('f533166b-3d7b-4772-8352-78f948abb65e', 'SE3L24CRRM', 'completed', 'system', NULL, NULL, NULL, '2026-09-02 10:15:39.162418+00', '2026-09-02 10:15:39.162418+00');
INSERT INTO public."serviceStatusHistory" VALUES ('fdbf97fb-cbe2-4540-9979-2a35cc4fce3a', 'SEPVF9ZVSB', 'appointment_retry', 'system', NULL, NULL, 'Task cancelled by staff member. Service requires reappointment.', '2026-06-28 23:49:03.304554+00', '2026-06-28 23:49:03.304554+00');
INSERT INTO public."serviceStatusHistory" VALUES ('2affdbca-cc62-432d-9c67-7a2f3732b0f9', 'SEPVF9ZVSB', 'in_progress', 'system', NULL, NULL, NULL, '2026-06-28 23:51:31.05465+00', '2026-06-28 23:51:31.05465+00');
INSERT INTO public."serviceStatusHistory" VALUES ('7bb0707c-191a-4b27-abe7-9ba08846fe2d', 'SEPVF9ZVSB', 'in_progress', 'system', NULL, NULL, NULL, '2026-06-28 23:54:01.596162+00', '2026-06-28 23:54:01.596162+00');
INSERT INTO public."serviceStatusHistory" VALUES ('b4ab3f1f-9172-44f6-9f6e-b350d5a5d70c', 'SECU0EX66G', 'pending', 'system', NULL, NULL, NULL, '2026-07-08 06:27:31.802803+00', '2026-07-08 06:27:31.802803+00');
INSERT INTO public."serviceStatusHistory" VALUES ('c0349e70-70bf-465c-8988-92f1fc605c8b', 'SECU0EX66G', 'in_progress', 'system', NULL, NULL, NULL, '2026-07-09 05:11:03.84618+00', '2026-07-09 05:11:03.84618+00');
INSERT INTO public."serviceStatusHistory" VALUES ('e9c88c39-dffa-4399-b32b-58e04244edb0', 'SEBCBQY8QO', 'completed', 'system', NULL, NULL, NULL, '2026-08-27 07:17:57.7299+00', '2026-08-27 07:17:57.7299+00');
INSERT INTO public."serviceStatusHistory" VALUES ('e5bd3dad-534f-4215-a301-8a5ff8910b2f', 'SESFYI1YQG', 'pending', 'system', NULL, NULL, NULL, '2026-07-20 16:54:42.548323+00', '2026-07-20 16:54:42.548323+00');
INSERT INTO public."serviceStatusHistory" VALUES ('60ce0f82-58fd-410f-8338-63ef726e4aef', 'SESFYI1YQG', 'in_progress', 'system', NULL, NULL, NULL, '2026-07-20 16:56:07.27956+00', '2026-07-20 16:56:07.27956+00');
INSERT INTO public."serviceStatusHistory" VALUES ('3718eb7b-9369-4253-9d52-e8211b9044ad', 'SESFYI1YQG', 'in_progress', 'system', NULL, NULL, NULL, '2026-07-20 16:58:28.910593+00', '2026-07-20 16:58:28.910593+00');
INSERT INTO public."serviceStatusHistory" VALUES ('80f32609-8461-4e16-a4e5-ae009c8e0f2c', 'SEFXHSDOCW', 'pending', 'system', NULL, NULL, NULL, '2026-07-21 07:01:17.722891+00', '2026-07-21 07:01:17.722891+00');
INSERT INTO public."serviceStatusHistory" VALUES ('d671aac3-037e-4fe5-8505-5e24f66b4b33', 'SESFYI1YQG', 'completed', 'system', NULL, NULL, NULL, '2026-07-21 14:49:05.007182+00', '2026-07-21 14:49:05.007182+00');
INSERT INTO public."serviceStatusHistory" VALUES ('87f917d4-5f38-4ba0-b501-4e0dbc82630e', 'SEFXHSDOCW', 'in_progress', 'system', NULL, NULL, NULL, '2026-07-25 06:26:22.13422+00', '2026-07-25 06:26:22.13422+00');
INSERT INTO public."serviceStatusHistory" VALUES ('dbb03659-4b75-4654-9440-a3cb88485793', 'SEFXHSDOCW', 'staff_departed', 'system', NULL, NULL, NULL, '2026-07-25 07:08:50.896175+00', '2026-07-25 07:08:50.896175+00');
INSERT INTO public."serviceStatusHistory" VALUES ('dd653355-0187-48f6-b26c-74bc86cdfd13', 'SEVTH0NE5K', 'pending', 'system', NULL, NULL, NULL, '2026-07-28 08:41:20.31482+00', '2026-07-28 08:41:20.31482+00');
INSERT INTO public."serviceStatusHistory" VALUES ('7c96f8aa-0986-4ae8-a752-7dc7b9979f75', 'SEVTH0NE5K', 'in_progress', 'system', NULL, NULL, NULL, '2026-08-02 13:32:27.064784+00', '2026-08-02 13:32:27.064784+00');
INSERT INTO public."serviceStatusHistory" VALUES ('bed89684-e0c1-40f7-a900-5f660b48faef', 'SEVTH0NE5K', 'staff_departed', 'system', NULL, NULL, NULL, '2026-08-02 13:37:04.99276+00', '2026-08-02 13:37:04.99276+00');
INSERT INTO public."serviceStatusHistory" VALUES ('6598da49-0208-43ba-be61-d1a6cd046813', 'SEPKD27390', 'pending', 'system', NULL, NULL, NULL, '2026-08-03 13:57:47.968694+00', '2026-08-03 13:57:47.968694+00');
INSERT INTO public."serviceStatusHistory" VALUES ('a08627af-3769-4b8f-afca-4e2927bb2b6e', 'SEPKD27390', 'in_progress', 'system', NULL, NULL, NULL, '2026-08-03 13:58:24.298514+00', '2026-08-03 13:58:24.298514+00');
INSERT INTO public."serviceStatusHistory" VALUES ('1f55667b-827d-4291-be27-b38ff04bddb6', 'SEPKD27390', 'staff_departed', 'system', NULL, NULL, NULL, '2026-08-03 13:58:40.868039+00', '2026-08-03 13:58:40.868039+00');
INSERT INTO public."serviceStatusHistory" VALUES ('fc84eb74-4719-45a8-87ef-0c7a1d75d012', 'SEPKD27390', 'staff_arrived', 'system', NULL, NULL, NULL, '2026-08-03 14:00:26.395896+00', '2026-08-03 14:00:26.395896+00');
INSERT INTO public."serviceStatusHistory" VALUES ('9255003f-0e5b-433b-a769-e240e89b3d03', 'SEPKD27390', 'service_center', 'system', NULL, NULL, NULL, '2026-08-03 14:00:39.448356+00', '2026-08-03 14:00:39.448356+00');
INSERT INTO public."serviceStatusHistory" VALUES ('e649bce4-1d3c-4972-8c8c-d6c508866808', 'SEPKD27390', 'service_center_received', 'system', NULL, NULL, NULL, '2026-08-04 08:30:00.135473+00', '2026-08-04 08:30:00.135473+00');
INSERT INTO public."serviceStatusHistory" VALUES ('c4a1b55b-898b-4e04-88bb-01b00af75c63', 'SEPKD27390', NULL, 'custom', 'এস ই ইলেকট্রনিকস সার্ভিসিং সেন্টার নোট', '‎আপনার আই পি এসটির কাজ সম্পূর্ণ করা হয়েছে এখন বর্তমানে ওয়েটিং টেস্টে আছে টেস্টিং শেষ হলেই আপনাকে সার্ভিস ট্রেকিং এর মাধ্যমে জানানো হবে সময় দিয়ে সহযোগীতা করবেন।
‎', NULL, '2026-08-04 10:08:57.452022+00', '2026-08-04 10:08:57.452022+00');
INSERT INTO public."serviceStatusHistory" VALUES ('36a69ddf-a4c5-4b38-905a-de1afd46d13d', 'SEPKD27390', NULL, 'custom', 'পন্যটির সমস্যা সমাধানে পরিক্ষা শুরু করেছে', '‎আপনার আই পি এস টি আমাদের অফিসিয়াল দক্ষ ইঞ্জিনিয়ার টিম পরিক্ষা নিরিক্ষার কাজ শুরু করেছে আশা করছি খুব দ্রুত সমস্যাটি খুঁজে বের করবে। সেই পর্যন্ত আমাদের সময় দিয়ে সহযোগিতা করবেন ধন্যবাদ
‎', NULL, '2026-08-04 09:53:57.670289+00', '2026-08-04 10:03:32.1+00');
INSERT INTO public."serviceStatusHistory" VALUES ('e0f6d272-3de8-4b5b-9032-069a6bc7f568', 'SEPKD27390', NULL, 'custom', 'আপনার পন্যটির সমস্যা খুঁজে বের করা হয়েছে ‎', 'আপনার আই পি এস টির ত্রুটি খুঁজে বের করা হয়েছে আমাদের সার্ভিস টিম খুব দ্রুত সমাধান করে আই পি এস টি রানিং করবে, আমাদের সময় দিয়ে সহযোগিতা করবেন ধন্যবাদ।', NULL, '2026-08-04 10:04:08.642907+00', '2026-08-04 10:04:08.642907+00');
INSERT INTO public."serviceStatusHistory" VALUES ('3b5f2b36-2544-4599-a0e6-986596315913', 'SEPKD27390', NULL, 'custom', '‎আই পি এসটির ত্রুটি সারানেরার কাজ চলছে', 'আপনার আই পি এসটির যে ত্রুটি দরা পরেছে তা সারানোর কাজ শুরু করেছে আশা করছি নতুন পাটর্স গুলা পরির্বতন করলে আই পি এসটি রানিং হয়ে যাবে ,সময় দিয়ে সহযোগীতা করবেন ধন্যবাদ।', NULL, '2026-08-04 10:05:12.241306+00', '2026-08-04 10:05:12.241306+00');
INSERT INTO public."serviceStatusHistory" VALUES ('1e0c9518-4644-4fbd-97a0-c2ebb2eaa1a5', 'SEPKD27390', NULL, 'custom', '‎সার্ভিস সেন্টার পন্যটির  টেস্টিং সাকসেসফুল', 'প্রিয় গ্রাহক আপনার আই পি এস টি সম্পূর্ণভাবে সার্ভিসিং করে সকল প্রকারের টেস্টিং করা শেষ হয়েছে আমরা আপনার আই পি এস টি ডেলিভারি দিতে এস ই ইলেকট্রনিকস সার্ভিস সেন্টার প্রস্তুত আছে', NULL, '2026-08-04 10:09:30.819747+00', '2026-08-04 10:09:30.819747+00');
INSERT INTO public."serviceStatusHistory" VALUES ('fd859faa-c8b1-401d-b734-7d33754ee218', 'SED603PVPW', 'pending', 'system', NULL, NULL, NULL, '2026-08-04 10:11:00.405104+00', '2026-08-04 10:11:00.405104+00');
INSERT INTO public."serviceStatusHistory" VALUES ('81f69a99-0d44-4192-8076-c55bc4dbacd5', 'SED603PVPW', 'in_progress', 'system', NULL, NULL, NULL, '2026-08-04 10:11:36.437415+00', '2026-08-04 10:11:36.437415+00');
INSERT INTO public."serviceStatusHistory" VALUES ('dd1ef944-4e19-49c5-a5e5-0a353b555ea4', 'SED603PVPW', 'in_progress', 'system', NULL, NULL, NULL, '2026-08-04 10:12:16.223244+00', '2026-08-04 10:12:16.223244+00');
INSERT INTO public."serviceStatusHistory" VALUES ('e01f0a1b-1cf2-451c-a4b7-455b142007e6', 'SECU0EX66G', 'completed', 'system', NULL, NULL, NULL, '2026-08-04 10:46:58.840931+00', '2026-08-04 10:46:58.840931+00');
INSERT INTO public."serviceStatusHistory" VALUES ('4647d9d5-d3c6-4ff6-a314-8a2722a46b1c', 'SEPVF9ZVSB', 'completed', 'system', NULL, NULL, NULL, '2026-08-04 10:52:38.540897+00', '2026-08-04 10:52:38.540897+00');
INSERT INTO public."serviceStatusHistory" VALUES ('43dae10d-14ff-4818-8a28-68cec57fd1ac', 'SED603PVPW', 'canceled', 'system', NULL, NULL, 'কাস্টমার ১ ঘন্টা দরে ফোন ধরে না ও ভুল ঠিকানা  দিয়েছে  টেকনিশিয়ান টিম ১ ঘন্টা ধরে লোকেশন গিয়ে পাইনি ও কয়েক বার কল দিয়েছে রিসিভ করে নাই তাই সার্ভিস টি ক্যান্সেল করা হয়েছে।', '2026-08-04 19:09:24.587837+00', '2026-08-04 19:09:24.587837+00');
INSERT INTO public."serviceStatusHistory" VALUES ('0350ff06-ae55-4475-9fe5-84fc0866dfef', 'SEVTH0NE5K', 'completed', 'system', NULL, NULL, NULL, '2026-08-08 09:27:27.639782+00', '2026-08-08 09:27:27.639782+00');
INSERT INTO public."serviceStatusHistory" VALUES ('aff081ab-c7fb-4c5f-be32-a986f802614a', 'SEBCBQY8QO', 'pending', 'system', NULL, NULL, NULL, '2026-08-08 09:28:59.374339+00', '2026-08-08 09:28:59.374339+00');
INSERT INTO public."serviceStatusHistory" VALUES ('e1f36726-d2e1-42a3-b125-751d675b62e9', 'SETSEA3JAO', 'pending', 'system', NULL, NULL, NULL, '2026-08-11 04:10:57.39522+00', '2026-08-11 04:10:57.39522+00');
INSERT INTO public."serviceStatusHistory" VALUES ('27879244-b29d-4d08-ba2b-2c21a8b52e13', 'SETSEA3JAO', 'in_progress', 'system', NULL, NULL, NULL, '2026-08-11 12:11:13.871889+00', '2026-08-11 12:11:13.871889+00');
INSERT INTO public."serviceStatusHistory" VALUES ('0f8de49b-3a3a-44df-b309-896e762c27bc', 'SETSEA3JAO', 'completed', 'system', NULL, NULL, NULL, '2026-08-12 10:55:23.076895+00', '2026-08-12 10:55:23.076895+00');
INSERT INTO public."serviceStatusHistory" VALUES ('fe1d0a68-e92e-4b1d-95a0-d23ff8ddfb85', 'SEPKD27390', NULL, 'custom', '‎সার্ভিস সেন্টার পণ্যটি ডেলিভারী দিতে প্রস্তুত', 'প্রিয় গ্রাহক  আপনার পন্যটির সার্ভিস আই ডি: SEYMLA0SYF আমাদের অফিসিয়াল সার্ভিস পয়েন্ট আই পি এসটি ডেলিভারী দিতে সম্পূর্ণ প্রস্তুত আছে আপনাকে অতি দ্রুত ডেলিভারী নিতে অনুরোধ করা হল।
‎', NULL, '2026-08-04 10:10:06.558844+00', '2026-08-12 11:02:23.319+00');
INSERT INTO public."serviceStatusHistory" VALUES ('75dc2f23-7c12-4422-b0ce-e6462e938a0c', 'SEPKD27390', 'completed', 'system', NULL, NULL, NULL, '2026-08-12 11:03:52.9731+00', '2026-08-12 11:03:52.9731+00');
INSERT INTO public."serviceStatusHistory" VALUES ('ce5f2b2e-0133-4eec-abb8-cc740edc7ee3', 'SE2JYULTV0', 'pending', 'system', NULL, NULL, NULL, '2026-08-13 08:04:01.008412+00', '2026-08-13 08:04:01.008412+00');
INSERT INTO public."serviceStatusHistory" VALUES ('c066d602-ef94-4e31-bc3f-42125ccb32ca', 'SE2JYULTV0', 'in_progress', 'system', NULL, NULL, NULL, '2026-08-13 08:04:48.471112+00', '2026-08-13 08:04:48.471112+00');
INSERT INTO public."serviceStatusHistory" VALUES ('063f4ca3-7047-4616-a02e-4ce693e29868', 'SE2JYULTV0', 'staff_departed', 'system', NULL, NULL, NULL, '2026-08-14 09:18:08.259537+00', '2026-08-14 09:18:08.259537+00');
INSERT INTO public."serviceStatusHistory" VALUES ('0cc95fc6-beb3-40b2-9c5c-70fa76c20c06', 'SE2JYULTV0', 'staff_arrived', 'system', NULL, NULL, NULL, '2026-08-14 09:18:19.15312+00', '2026-08-14 09:18:19.15312+00');
INSERT INTO public."serviceStatusHistory" VALUES ('4b98354c-3776-4304-9dd8-f2f1487c6f94', 'SE2JYULTV0', 'completed', 'system', NULL, NULL, NULL, '2026-08-14 09:19:43.0299+00', '2026-08-14 09:19:43.0299+00');
INSERT INTO public."serviceStatusHistory" VALUES ('6871cda3-70ee-437c-915a-45422da8780f', 'SEFXHSDOCW', 'completed', 'system', NULL, NULL, NULL, '2026-08-14 09:22:06.225638+00', '2026-08-14 09:22:06.225638+00');
INSERT INTO public."serviceStatusHistory" VALUES ('a76cefb6-d004-4897-bf46-560aa8e73260', 'SEBCBQY8QO', 'in_progress', 'system', NULL, NULL, NULL, '2026-08-15 14:17:10.329827+00', '2026-08-15 14:17:10.329827+00');
INSERT INTO public."serviceStatusHistory" VALUES ('fa75ec4f-ab8e-49de-b10e-9e6a28fd695a', 'SE53W3BWD7', 'pending', 'system', NULL, NULL, NULL, '2026-08-17 08:19:55.55849+00', '2026-08-17 08:19:55.55849+00');
INSERT INTO public."serviceStatusHistory" VALUES ('6dcfc9e4-f89d-41f4-9441-f52b777ff106', 'SETM13C0HL', 'pending', 'system', NULL, NULL, NULL, '2026-08-20 09:11:56.704109+00', '2026-08-20 09:11:56.704109+00');
INSERT INTO public."serviceStatusHistory" VALUES ('454e6896-07ce-4820-b618-97f901d95ab2', 'SETM13C0HL', 'in_progress', 'system', NULL, NULL, NULL, '2026-08-21 08:25:27.47935+00', '2026-08-21 08:25:27.47935+00');
INSERT INTO public."serviceStatusHistory" VALUES ('d602c4b3-dcd8-4be1-912c-f19280161021', 'SETM13C0HL', 'staff_departed', 'system', NULL, NULL, NULL, '2026-08-21 09:26:24.388274+00', '2026-08-21 09:26:24.388274+00');
INSERT INTO public."serviceStatusHistory" VALUES ('635eb9ec-ff42-4a4e-8ce3-6e4a87550436', 'SETM13C0HL', 'staff_arrived', 'system', NULL, NULL, NULL, '2026-08-21 11:36:01.04975+00', '2026-08-21 11:36:01.04975+00');
INSERT INTO public."serviceStatusHistory" VALUES ('698713bf-0aeb-457d-b709-3e1d8eb062c9', 'SE8603YSLQ', 'pending', 'system', NULL, NULL, NULL, '2026-08-23 09:08:34.317697+00', '2026-08-23 09:08:34.317697+00');
INSERT INTO public."serviceStatusHistory" VALUES ('ffdb00a5-d2b3-486b-8e3a-41219bacb943', 'SE53W3BWD7', 'in_progress', 'system', NULL, NULL, NULL, '2026-08-23 10:09:37.554281+00', '2026-08-23 10:09:37.554281+00');
INSERT INTO public."serviceStatusHistory" VALUES ('c5a4876b-6e24-484d-bbae-823e6ea80018', 'SE53W3BWD7', 'staff_departed', 'system', NULL, NULL, NULL, '2026-08-23 21:44:56.94863+00', '2026-08-23 21:44:56.94863+00');
INSERT INTO public."serviceStatusHistory" VALUES ('1eb0f66e-6345-4f51-8fa7-3daccad04bc5', 'SE53W3BWD7', 'staff_arrived', 'system', NULL, NULL, NULL, '2026-08-23 21:45:12.265123+00', '2026-08-23 21:45:12.265123+00');
INSERT INTO public."serviceStatusHistory" VALUES ('c06dc7f4-f075-46de-99ce-739b3bd37586', 'SE53W3BWD7', 'completed', 'system', NULL, NULL, NULL, '2026-08-23 21:46:11.504811+00', '2026-08-23 21:46:11.504811+00');
INSERT INTO public."serviceStatusHistory" VALUES ('9cb176a0-a104-4521-9e6c-fb7c1e8b6e07', 'SE8603YSLQ', 'in_progress', 'system', NULL, NULL, NULL, '2026-08-24 03:54:12.040983+00', '2026-08-24 03:54:12.040983+00');
INSERT INTO public."serviceStatusHistory" VALUES ('2f015d69-9ce0-47c1-a54b-46b941c95d26', 'SE8603YSLQ', 'staff_departed', 'system', NULL, NULL, NULL, '2026-08-24 03:55:15.766347+00', '2026-08-24 03:55:15.766347+00');
INSERT INTO public."serviceStatusHistory" VALUES ('278bb6fc-b7a6-4469-a913-c8cc094711fa', 'SE8603YSLQ', 'staff_arrived', 'system', NULL, NULL, NULL, '2026-08-24 11:14:55.236575+00', '2026-08-24 11:14:55.236575+00');
INSERT INTO public."serviceStatusHistory" VALUES ('51f9af1e-2515-4d85-9bcc-44e3d5164596', 'SE8603YSLQ', 'completed', 'system', NULL, NULL, NULL, '2026-08-25 05:51:25.194533+00', '2026-08-25 05:51:25.194533+00');
INSERT INTO public."serviceStatusHistory" VALUES ('fc634bd8-2f0c-4835-b118-e03767ee6937', 'SETM13C0HL', 'completed', 'system', NULL, NULL, NULL, '2026-08-26 07:08:54.119286+00', '2026-08-26 07:08:54.119286+00');


--
-- Data for Name: smsLogs; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: staffComplaints; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public."staffComplaints" VALUES ('072b7d0f-6219-4c99-b4c7-370d44fe0244', 'SE6A8F9QWR', 'SEWCFAWBYM', 'SETJ1RPUO8', NULL, 'অভিযোগ ', 'টেকনিশিয়ানের নাম: SHABUDDIN , টেকনিশিয়ানের আইডি:TECHNICIAN , সার্ভিস আইডিঃ CK-SEKHY104QB সার্ভিসের আইপিএস মেরামত ঘটনার সময়: ০৪/০৩/২০২৬ ইং অভিযোগের সংক্ষিপ্ত বিবরণ টেকনিশিয়ান উচ্চস্বরে ', 'media/complaints/SE6A8F9QWR/evidence_67d1fdeb-b15e-445c-8f2d-f38e8be2fe99.webp', 'completed', 'আমরা বিষয়টি অত্যন্ত গুরুত্বের সাথে যাচাই করেছি। তদন্তে দেখা গেছে যে স্টাফের বিরুদ্ধে আনীত অভিযোগটি প্রমাণিত হয়নি। সংশ্লিষ্ট ঘটনার জন্য স্টাফ সরাসরি দায়ী নন।', 'আমরা বিষয়টি গুরুত্বের সাথে যাচাই করেছি। তদন্তে স্টাফের কোনো অবহেলা প্রমাণিত হয়নি। আপনার সহযোগিতার জন্য ধন্যবাদ।', 'মোঃ সাহাব উদ্দিন মাহমুদ', '০১৩১০৬৭৩৬০০', 'দায়িত্বরত কর্মকর্তা (প্রশাসনিক শাখা)', 'not_guilty', '', '', '', '', '2026-04-17 20:12:39.322602+00', '2026-04-18 03:42:31.545+00');
INSERT INTO public."staffComplaints" VALUES ('23e6509c-7d51-44cc-9059-040f4d0d46ca', 'SE8GOXP7OT', 'SEWCFAWBYM', 'SETJ1RPUO8', NULL, 'অপেশাদার আচরণ ভুল সার্ভিস ', 'আমি আমার আই পি এস প্যাকেজ টি আপনাদের কোম্পানির সুনাম সুনে ৬ মাস পূর্বে  ক্র‍য় করেছিলাম গত দুই দিন ধরে আই পি এস টি সমস্যা দিচ্ছে তাই আপনাদের অফিসিয়াল অ্যাপ ডাউনলোড করে আমি আপনাদের অনলাইনে সার্ভিসি ', 'media/complaints/SE8GOXP7OT/evidence_5069ec55-2999-4d9f-bbf5-11ce7ee944ef.webp', 'completed', 'নিযুক্ত তদন্ত কর্মকর্তার সুপারিশক্রমে আপনাকে সাময়িকভাবে রহিত করা হয়েছে। দাপ্তরিক কার্যক্রম থেকে বিরত থাকতে নির্দেশ প্রদান করা হলো।', 'তদন্তে আপনার অভিযোগের সত্যতা প্রমাণিত হয়েছে এবং সংশ্লিষ্ট টেকনিশিয়ান দোষী সাব্যস্ত হয়েছেন। আমরা তার বিরুদ্ধে যথাযথ শাস্তিমূলক ব্যবস্থা গ্রহণ করেছি।', 'মোঃ সাহাব উদ্দিন মাহমুদ', '০১৩১০৬৭৩৬০০', 'দায়িত্বরত কর্মকর্তা (প্রশাসনিক শাখা)', 'suspension', '18/07/2026', '18/08/2026', '', '', '2026-07-18 10:20:22.29209+00', '2026-07-18 15:08:45.919+00');
INSERT INTO public."staffComplaints" VALUES ('ae94365f-0219-4680-b42e-72c49d1102ef', 'SEOX1AMCCY', 'SEWCFAWBYM', 'SEQQTONWQD', NULL, 'অপেশাদার আচরণের অভিযোগ ', 'আমি আপনাদের ওয়ারেন্টি ভুক্ত কাস্টমার গত ১৪ তারিখ ৮ মাস ২০২৬ কোন তারিখে আপনাদের কাস্টমার কেয়ারে ফোন দিয়ে আমার অফিসের আইপিএসটি সার্ভিসিং করার জন্য সার্ভিস অনুরোধ করি কোম্পানি সার্ভিসের অনুরোধটি গ্রহণ করে সার্ভিস বিভাগে দায়িত্ব দেয় সেখান থেকে আনোয়ার টেকনিশিয়ান আমার সাথে খুব অপেশাদার আচরণ করেছে আমি মর্মাহত আপনাদের এই স্বনামধন্য প্রতিষ্ঠান থেকে আমি এটা এ বিষয়টা মাননীয় চেয়ারম্যান ও এস ইলেকট্রনিক্সের প্রশাসনিক শাখা ব্যবস্থা গ্রহণ করে সঠিক বিচার করে ', 'media/complaints/SEOX1AMCCY/evidence_0fa8c155-339b-4145-888e-2b2259058b5a.webp', 'completed', 'আমরা বিষয়টি অত্যন্ত গুরুত্বের সাথে যাচাই করেছি। তদন্তে দেখা গেছে যে স্টাফের বিরুদ্ধে আনীত অভিযোগটি প্রমাণিত হয়নি। সংশ্লিষ্ট ঘটনার জন্য স্টাফ সরাসরি দায়ী নন।', 'আপনার অভিযোগের প্রেক্ষিতে সংশ্লিষ্ট টেকনিশিয়ানকে সতর্ক করা হয়েছে। আশা করি ভবিষ্যতে এমন ঘটনার পুনরাবৃত্তি হবে না।', 'মোঃ সাহাব উদ্দিন মাহমুদ', '০১৩১০৬৭৩৬০০', 'দায়িত্বরত কর্মকর্তা (প্রশাসনিক শাখা)', 'not_guilty', '', '', '', '', '2026-08-17 00:02:09.639187+00', '2026-08-17 00:17:40.774+00');


--
-- Data for Name: staffNotifications; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public."staffNotifications" VALUES ('4c8811ec-84df-4af9-8da4-66346fb37e4e', 'SETJ1RPUO8', 'service_appointed', 'জনাব Shabuddin Mahamud,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য সার্ভিস করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : Shabuddin Mahamud
কাস্টমার ফোন : 01310673600
কাস্টমার সার্ভিস আই ডি নং : SE9GMIWGQT
প্রোডাক্ট মডেল : SEPI1050 VA DSP SINE WAVE IPS 
কাস্টমার লোকেশন : Badambagicha Rd No. 4 Sylhet 
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন http://localhost:3000/service-report?serviceId=SE9GMIWGQT', '/staff/tasks', true, '2026-04-17 19:35:46.482731+00');
INSERT INTO public."staffNotifications" VALUES ('51030986-2541-4209-983b-d247c0a1c95e', 'SETJ1RPUO8', 'balance_added', 'Admin added ৳1800 to your balance for job #SE9GMIWGQT.', '/staff/payment', true, '2026-04-17 19:36:40.853748+00');
INSERT INTO public."staffNotifications" VALUES ('424d1d8f-e6cf-4e6a-9ed3-2aaa82039299', 'SEQ2FBJ75J', 'service_appointed', 'জনাব HALIM MIA,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য IPS ইন্সটল করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : মো বিপ্লব তালুকদার
কাস্টমার ফোন : 01732599441
কাস্টমার সার্ভিস আই ডি নং : SE3NL80LG0
প্রোডাক্ট মডেল : SEPI 1050 VA DSP SINE WAVE  IPS 
কাস্টমার লোকেশন : শামীমাবাদ,মজুমদারপাড়া ৩রোড
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন http://localhost:3000/service-report?serviceId=SE3NL80LG0', '/staff/tasks', true, '2026-04-18 08:58:40.8447+00');
INSERT INTO public."staffNotifications" VALUES ('c4df9894-c262-4954-b116-ea42c9ca69ef', 'SEQ2FBJ75J', 'balance_added', 'Admin added ৳10 to your balance for job #SE3NL80LG0.', '/staff/payment', true, '2026-04-18 17:44:34.623875+00');
INSERT INTO public."staffNotifications" VALUES ('e8fb02ae-8149-4dae-a116-dfaa68877ea8', 'SEQ2FBJ75J', 'balance_added', 'Admin added ৳50 to your balance for job #SE1IMT8LUF.', '/staff/payment', true, '2026-04-21 20:50:49.200138+00');
INSERT INTO public."staffNotifications" VALUES ('65a27a9e-741f-442c-80db-0f8bdcbe6320', 'SEQ2FBJ75J', 'service_appointed', 'জনাব HALIM MIA,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য IPS ইন্সটল করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : MD SHIEKH RAFI
কাস্টমার ফোন : 01851344473
কাস্টমার সার্ভিস আই ডি নং : SE2OP76BL6
প্রোডাক্ট মডেল : SEPI-1050 VA DSP SINE WAVW IPS
কাস্টমার লোকেশন : Agroni 96 Londoni Road Sylhit
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন http://localhost:3000/service-report?serviceId=SE2OP76BL6', '/staff/tasks', true, '2026-04-22 20:35:12.890748+00');
INSERT INTO public."staffNotifications" VALUES ('c4923097-609f-4ce8-8de2-6afc9d1aa93e', 'SETJ1RPUO8', 'payment_update', 'Your payment request of ৳1100 has been approved and is being processed.', '/staff/payment', true, '2026-04-17 20:23:46.714946+00');
INSERT INTO public."staffNotifications" VALUES ('6fbffcbf-7a10-4474-9b5d-ab55855b2827', 'SETJ1RPUO8', 'service_appointed', 'জনাব Shabuddin Mahamud,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য সার্ভিস করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : SE ELECTRONICS
কাস্টমার ফোন : 01310673600
কাস্টমার সার্ভিস আই ডি নং : SEVWV8BY6C
প্রোডাক্ট মডেল : SEPI 1050 VA DSP SINE WAVE IPS 
কাস্টমার লোকেশন : Sylhet
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন https://seelectronicspro.vercel.app/service-report?serviceId=SEVWV8BY6C', '/staff/tasks', true, '2026-04-26 19:05:24.79418+00');
INSERT INTO public."staffNotifications" VALUES ('0876e277-130c-481f-941b-d733793ff7c4', 'SETJ1RPUO8', 'service_appointed', 'জনাব Shabuddin Mahamud,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য সার্ভিস করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : Shabuddin Mahamud
কাস্টমার ফোন : 01310673600
কাস্টমার সার্ভিস আই ডি নং : SE9GMIWGQT
প্রোডাক্ট মডেল : SEPI1050 VA DSP SINE WAVE IPS 
কাস্টমার লোকেশন : Badambagicha Rd No. 4 Sylhet 
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন http://localhost:3000/service-report?serviceId=SE9GMIWGQT', '/staff/tasks', true, '2026-04-17 20:34:27.754074+00');
INSERT INTO public."staffNotifications" VALUES ('cf9c457c-c5f1-47dd-9fd0-68db78a0c785', 'SETJ1RPUO8', 'payment_update', 'Your payment of ৳1100 has been completed!', '/staff/payment', true, '2026-04-17 20:23:50.53697+00');
INSERT INTO public."staffNotifications" VALUES ('75c503c7-5773-47b9-b7f2-613340c611c9', 'SEQ2FBJ75J', 'service_appointed', 'জনাব HALIM MIA,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য IPS ইন্সটল করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : MD AMINUR ROHOMAN
কাস্টমার ফোন : 01716563822
কাস্টমার সার্ভিস আই ডি নং : SE1IMT8LUF
প্রোডাক্ট মডেল : SEPI-1050 VA DSP SINE WAVE IPS 2.5 V
কাস্টমার লোকেশন : শামীমাবাদ,মজুমদারপাড়া ৩ রোড সিলেট
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন http://localhost:3000/service-report?serviceId=SE1IMT8LUF', '/staff/tasks', true, '2026-04-21 20:48:21.799819+00');
INSERT INTO public."staffNotifications" VALUES ('bfda688b-ddad-4119-8820-52dbf3a5fc86', 'SETJ1RPUO8', 'service_appointed', 'জনাব Shabuddin Mahamud,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য সার্ভিস করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : Shabuddin Mahamud
কাস্টমার ফোন : 01310673600
কাস্টমার সার্ভিস আই ডি নং : SEVGU1SL2H
প্রোডাক্ট মডেল : SEPI1050 VA DSP SINE WAVE IPS 
কাস্টমার লোকেশন : Badambagicha Rd No. 4 Sylhet 
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন https://seelectronicspro.vercel.app/service-report?serviceId=SEVGU1SL2H', '/staff/tasks', true, '2026-04-28 20:44:23.274718+00');
INSERT INTO public."staffNotifications" VALUES ('01fcafdb-927e-4f96-9a77-d05a6c6a80cd', 'SEQ2FBJ75J', 'service_appointed', 'জনাব HALIM MIA,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য IPS ইন্সটল করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : MD MASUD RANA
কাস্টমার ফোন : 01627562997
কাস্টমার সার্ভিস আই ডি নং : SE81XT2D1P
প্রোডাক্ট মডেল : SEPI 1050 VA DSP SINE WAVE IPS
কাস্টমার লোকেশন : SHAMIMABAD MOJUMDAR PARA SYLHET
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন https://seelectronicspro.vercel.app/service-report?serviceId=SE81XT2D1P', '/staff/tasks', true, '2026-05-01 15:08:49.740826+00');
INSERT INTO public."staffNotifications" VALUES ('2034e62b-4d31-41a6-9c6e-63ab4dd86e59', 'SEQ2FBJ75J', 'balance_added', 'Admin added ৳20 to your balance for job #SE81XT2D1P.', '/staff/payment', true, '2026-05-01 20:25:30.009497+00');
INSERT INTO public."staffNotifications" VALUES ('e65ac99c-7751-4dd4-a88a-1d911148f1c7', 'SEQ2FBJ75J', 'service_appointed', 'জনাব HALIM MIA,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য IPS ইন্সটল করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : MD MAMUN BAI 
কাস্টমার ফোন : 01911199796
কাস্টমার সার্ভিস আই ডি নং : SESPUXV13A
প্রোডাক্ট মডেল : SEPI 650 VA
কাস্টমার লোকেশন : Block E, Road 6, Spring Tower,  Uposhahor, Sylhet
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন https://seelectronicspro.vercel.app/service-report?serviceId=SESPUXV13A', '/staff/tasks', true, '2026-05-02 14:16:24.998748+00');
INSERT INTO public."staffNotifications" VALUES ('f6d20809-c077-464d-8d5c-f28e22642c5f', 'SEN5Y2N6WT', 'application_update', 'প্রিয় আল আমিন আহমেদ ,
অভিনন্দন! আপনার আবেদনটি সফলভাবে যাচাই করা হয়েছে এবং টেকনিশিয়ান সার্ভিস পয়েন্ট-এ অনুমোদিত হয়েছে।
যেকোনো তথ্যের জন্য 09649355555', '/staff/profile', true, '2026-05-02 16:46:13.315376+00');
INSERT INTO public."staffNotifications" VALUES ('2d1aef62-d88e-4700-a43b-80644cb90d7e', 'SEMQS5YF41', 'application_update', 'প্রিয় মোহাম্মদ আলী,
অভিনন্দন! আপনার আবেদনটি সফলভাবে যাচাই করা হয়েছে এবং টেকনিশিয়ান সার্ভিস পয়েন্ট-এ অনুমোদিত হয়েছে।
যেকোনো তথ্যের জন্য 09649355555', '/staff/profile', true, '2026-05-04 17:15:57.575713+00');
INSERT INTO public."staffNotifications" VALUES ('eb0322cc-0904-48b5-81a4-9a489515b2e3', 'SETJ1RPUO8', 'payment_update', 'Your payment of ৳150 has been completed!', '/staff/payment', true, '2026-05-02 14:52:45.873053+00');
INSERT INTO public."staffNotifications" VALUES ('c498aab0-c38d-45b0-b33e-35e5f2194fa7', 'SETJ1RPUO8', 'payment_update', 'Your payment request of ৳150 has been approved and is being processed.', '/staff/payment', true, '2026-05-02 14:51:38.645745+00');
INSERT INTO public."staffNotifications" VALUES ('823d9746-7099-4a43-a0bc-ef5904cc2c15', 'SEQ2FBJ75J', 'balance_added', 'Admin added ৳40 to your balance.', '/staff/payment', true, '2026-05-02 14:35:19.739118+00');
INSERT INTO public."staffNotifications" VALUES ('33fcc3ed-7b00-4661-bfed-a37c268d85c7', 'SEQ2FBJ75J', 'payment_update', 'Your payment of ৳20 has been completed!', '/staff/payment', true, '2026-05-02 14:32:04.874809+00');
INSERT INTO public."staffNotifications" VALUES ('a8d17d9e-ae2a-4ce4-8947-f4138e6ae6cd', 'SEQ2FBJ75J', 'payment_update', 'Your payment request of ৳20 has been approved and is being processed.', '/staff/payment', true, '2026-05-02 14:31:58.851545+00');
INSERT INTO public."staffNotifications" VALUES ('8a5cd895-73a5-4d28-a777-79df2ba533b3', 'SETJ1RPUO8', 'service_appointed', 'জনাব Shabuddin Mahamud,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য সার্ভিস করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : Shabuddin Mahamud
কাস্টমার ফোন : 01310673600
কাস্টমার সার্ভিস আই ডি নং : SECT2696HO
প্রোডাক্ট মডেল : SEPI1050 VA DSP SINE WAVE IPS 
কাস্টমার লোকেশন : Badambagicha Rd No. 4 Sylhet 
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন https://seelectronicspro.vercel.app/service-report?serviceId=SECT2696HO', '/staff/tasks', true, '2026-05-02 16:26:31.042532+00');
INSERT INTO public."staffNotifications" VALUES ('417ea98f-fe18-4301-8e0c-4a0ef92feed4', 'SE2L0OQUBT', 'service_appointed', 'জনাব MD HALIM MIA,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য সার্ভিস করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : jamiatul khair al islamiya madrasah.77000 
কাস্টমার ফোন : 01772133687
কাস্টমার সার্ভিস আই ডি নং : SEDMVUT0WI
প্রোডাক্ট মডেল : SEP 2 KVA 24 V DSP SINE WAVE IPS
কাস্টমার লোকেশন : Pir''s Bazar Chowdhury Para Boteswar Sylhet
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন https://seelectronicspro.vercel.app/service-report?serviceId=SEDMVUT0WI', '/staff/tasks', false, '2026-05-18 07:01:13.229571+00');
INSERT INTO public."staffNotifications" VALUES ('66040b95-cbb1-4ff2-860c-c95caa52470d', 'SETJ1RPUO8', 'payment_update', 'Your payment of ৳100 has been completed!', '/staff/payment', false, '2026-06-19 19:07:55.588884+00');
INSERT INTO public."staffNotifications" VALUES ('27f395b1-7a9d-4436-965b-2cacf6ddc8f4', 'SEQ2FBJ75J', 'payment_update', 'Your payment of ৳60 has been completed!', '/staff/payment', true, '2026-05-16 10:10:55.016222+00');
INSERT INTO public."staffNotifications" VALUES ('a627901d-0921-4262-a25c-fde57306ed06', 'SEQ2FBJ75J', 'payment_update', 'Your payment request of ৳60 has been approved and is being processed.', '/staff/payment', true, '2026-05-16 09:59:40.664526+00');
INSERT INTO public."staffNotifications" VALUES ('b90a014e-24a1-4f66-8f10-08bf3798246c', 'SEQ2FBJ75J', 'service_appointed', 'জনাব HALIM MIA,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য IPS ইন্সটল করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : MD JOSHIM 
কাস্টমার ফোন : 01710972946
কাস্টমার সার্ভিস আই ডি নং : SEO6J6VL6J
প্রোডাক্ট মডেল : SEPI 850 VA DSP SINE WAVE IPS
কাস্টমার লোকেশন : Sherpur  chargers  brahmanbaria 
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন https://seelectronicspro.vercel.app/service-report?serviceId=SEO6J6VL6J', '/staff/tasks', true, '2026-05-05 06:37:33.428444+00');
INSERT INTO public."staffNotifications" VALUES ('24c34618-f1b5-4e49-8d97-f8b7f41e4168', 'SETJ1RPUO8', 'payment_update', 'Your payment request of ৳200 has been approved and is being processed.', '/staff/payment', false, '2026-06-28 19:01:05.042106+00');
INSERT INTO public."staffNotifications" VALUES ('09f310e9-a8e8-4144-b406-83583d7fe3fa', 'SETJ1RPUO8', 'payment_update', 'Your payment of ৳200 has been completed!', '/staff/payment', false, '2026-06-28 19:03:06.712165+00');
INSERT INTO public."staffNotifications" VALUES ('aae2c0a1-c94c-40b5-adad-656438dbcf09', 'SETJ1RPUO8', 'service_appointed', 'জনাব Shabuddin Mahamud,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য সার্ভিস করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : Shabuddin Mahamud
কাস্টমার ফোন : 01310673600
কাস্টমার সার্ভিস আই ডি নং : SEPVF9ZVSB
প্রোডাক্ট মডেল : SEPI1050 VA DSP SINE WAVE IPS 
কাস্টমার লোকেশন : Badambagicha Rd No. 4 Sylhet 
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন https://seelectronicspro.vercel.app/service-report?serviceId=SEPVF9ZVSB', '/staff/tasks', false, '2026-06-28 23:26:58.997457+00');
INSERT INTO public."staffNotifications" VALUES ('96ef6992-8ff9-4152-bd86-38dd15d56e4e', 'SE2L0OQUBT', 'service_appointed', 'জনাব MD HALIM MIA,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য সার্ভিস করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : Shabuddin Mahamud
কাস্টমার ফোন : 01310673600
কাস্টমার সার্ভিস আই ডি নং : SEPVF9ZVSB
প্রোডাক্ট মডেল : SEPI1050 VA DSP SINE WAVE IPS 
কাস্টমার লোকেশন : Badambagicha Rd No. 4 Sylhet 
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন https://seelectronicspro.vercel.app/service-report?serviceId=SEPVF9ZVSB', '/staff/tasks', false, '2026-06-28 23:54:02.467483+00');
INSERT INTO public."staffNotifications" VALUES ('0ec0a086-1cae-4906-be3f-3cbfd5e37793', 'SETJ1RPUO8', 'payment_update', 'Your payment request of ৳100 has been approved and is being processed.', '/staff/payment', true, '2026-06-19 19:06:58.581412+00');
INSERT INTO public."staffNotifications" VALUES ('d05dd410-cea7-415e-8a83-834d8ddd77f9', 'SETJ1RPUO8', 'balance_added', 'Admin added ৳800 to your balance for job #SEP7WH2OO3.', '/staff/payment', true, '2026-07-05 20:39:57.894867+00');
INSERT INTO public."staffNotifications" VALUES ('c1f593ee-ea15-4342-8bdd-52968572616f', 'SETJ1RPUO8', 'payment_update', 'Your payment request of ৳300 has been approved and is being processed.', '/staff/payment', true, '2026-07-05 20:52:05.818098+00');
INSERT INTO public."staffNotifications" VALUES ('b31347d8-482b-4273-92ae-50c22b0885df', 'SETJ1RPUO8', 'payment_update', 'Your payment of ৳300 has been completed!', '/staff/payment', true, '2026-07-05 20:54:25.959007+00');
INSERT INTO public."staffNotifications" VALUES ('75c1f191-1a2e-4693-93ec-d63e9ed529d6', 'SETJ1RPUO8', 'service_appointed', 'জনাব Shabuddin Mahamud,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য সার্ভিস করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : Shabuddin Mahamud
কাস্টমার ফোন : 01310673600
কাস্টমার সার্ভিস আই ডি নং : SEM7WP5GO3
প্রোডাক্ট মডেল : SEPI1050 VA DSP SINE WAVE IPS 
কাস্টমার লোকেশন : Badambagicha Rd No. 4 Sylhet 
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন https://seelectronicspro.vercel.app/service-report?serviceId=SEM7WP5GO3', '/staff/tasks', true, '2026-07-04 16:41:47.910591+00');
INSERT INTO public."staffNotifications" VALUES ('2405f764-5cd6-4370-86fe-2cc1aecf4af0', 'SETJ1RPUO8', 'service_appointed', 'জনাব Shabuddin Mahamud,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য সার্ভিস করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : ATIKUR ROHOMAN
কাস্টমার ফোন : 01310673602
কাস্টমার সার্ভিস আই ডি নং : SEP7WH2OO3
প্রোডাক্ট মডেল : SEPI 1050 VA DSP SINE WAVE IPS 
কাস্টমার লোকেশন : Badambagicha Rd No. 2 Sylhet 
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন https://seelectronicspro.vercel.app/service-report?serviceId=SEP7WH2OO3', '/staff/tasks', true, '2026-07-02 19:31:45.728499+00');
INSERT INTO public."staffNotifications" VALUES ('83728b0a-8f19-45bf-8364-4bc2a4459be3', 'SETJ1RPUO8', 'account_status', 'প্রিয় Shabuddin Mahamud,
আপনার অ্যাকাউন্টটি সাময়িকভাবে বন্ধ (Blocked) করা হয়েছে। বিস্তারিত জানতে বা অ্যাকাউন্টটি সক্রিয় করতে এডমিনের সাথে যোগাযোগ করুন। 09649355555', '/staff/profile', false, '2026-07-05 20:57:04.525327+00');
INSERT INTO public."staffNotifications" VALUES ('bf733615-ee14-43e9-87c9-2282c29f2eb9', 'SETJ1RPUO8', 'account_status', 'প্রিয় Shabuddin Mahamud,
আপনার অ্যাকাউন্টটি পুনরায় সক্রিয় (Activated) করা হয়েছে। আপনি এখন লগইন করে কাজ করতে পারবেন। 09649355555', '/staff/profile', false, '2026-07-05 21:03:17.991451+00');
INSERT INTO public."staffNotifications" VALUES ('7c66de20-7a69-4df4-a891-f2bf39db92db', 'SETJ1RPUO8', 'payment_update', 'Your payment request of ৳100 has been approved and is being processed.', '/staff/payment', false, '2026-07-05 21:07:08.448+00');
INSERT INTO public."staffNotifications" VALUES ('725ba0a7-5531-4240-9454-40d36b3e0c2a', 'SETJ1RPUO8', 'payment_update', 'Your payment of ৳100 has been completed!', '/staff/payment', false, '2026-07-05 21:09:02.852878+00');
INSERT INTO public."staffNotifications" VALUES ('fd12ef90-42a1-4217-9414-8fc65aed50c5', 'SE2L0OQUBT', 'service_appointed', 'জনাব MD HALIM MIA,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য সার্ভিস করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : MD ABDUL MOTIN 
কাস্টমার ফোন : 01716387242
কাস্টমার সার্ভিস আই ডি নং : SECU0EX66G
প্রোডাক্ট মডেল : SEPI 1250 VA DSP IPS 
কাস্টমার লোকেশন : SHAMIMABAD MOHILA COL SYLHET 
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন https://seelectronicspro.vercel.app/service-report?serviceId=SECU0EX66G', '/staff/tasks', false, '2026-07-09 05:11:04.788164+00');
INSERT INTO public."staffNotifications" VALUES ('54d8f248-9719-4c9c-9871-e75d46f51330', 'SEQ2FBJ75J', 'service_appointed', 'জনাব HALIM MIA,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য IPS ইন্সটল করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : jamiatul khair al islamiya madrasah.
কাস্টমার ফোন : 01772133687
কাস্টমার সার্ভিস আই ডি নং : SEHWH20ZUH
প্রোডাক্ট মডেল : SEP 2 KVA 24 V DSP SINE WAVE IPS
কাস্টমার লোকেশন : Pir''s Bazar Chowdhury Para Boteswar Sylhet
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন https://seelectronicspro.vercel.app/service-report?serviceId=SEHWH20ZUH', '/staff/tasks', true, '2026-05-16 07:52:22.498889+00');
INSERT INTO public."staffNotifications" VALUES ('ea83b4fa-299b-4527-be99-ca4a86c67681', 'SETJ1RPUO8', 'payment_update', 'Your payment request of ৳650 has been approved and is being processed.', '/staff/payment', false, '2026-07-13 02:10:38.169736+00');
INSERT INTO public."staffNotifications" VALUES ('fbeb409a-b2ab-4a47-8fed-4a1b2ac2cb2f', 'SETJ1RPUO8', 'payment_update', 'Your payment of ৳650 has been completed!', '/staff/payment', false, '2026-07-13 02:11:47.507271+00');
INSERT INTO public."staffNotifications" VALUES ('0afecbcb-a4b2-45e7-922a-26aa55607752', 'SETJ1RPUO8', 'balance_added', 'Admin added ৳300 to your balance for job #SEM7WP5GO3.', '/staff/payment', false, '2026-07-13 02:12:56.822435+00');
INSERT INTO public."staffNotifications" VALUES ('3b7de016-0342-43cd-bb68-5c4103a8760a', 'SE2L0OQUBT', 'account_status', 'প্রিয় MD HALIM MIA,
আপনার অ্যাকাউন্টটি সাময়িকভাবে বন্ধ (Blocked) করা হয়েছে। বিস্তারিত জানতে বা অ্যাকাউন্টটি সক্রিয় করতে এডমিনের সাথে যোগাযোগ করুন। বিস্তারিত জানতে 09649355555', '/staff/profile', false, '2026-07-13 15:25:05.052781+00');
INSERT INTO public."staffNotifications" VALUES ('a30e624d-ccb7-4b0c-a826-7c231c383182', 'SEQ2FBJ75J', 'account_status', 'প্রিয় HALIM MIA,
আপনার অ্যাকাউন্টটি সাময়িকভাবে বন্ধ (Blocked) করা হয়েছে। বিস্তারিত জানতে বা অ্যাকাউন্টটি সক্রিয় করতে এডমিনের সাথে যোগাযোগ করুন। বিস্তারিত জানতে 09649355555', '/staff/profile', true, '2026-07-13 15:25:27.963417+00');
INSERT INTO public."staffNotifications" VALUES ('2e908608-19de-4f02-ae20-b60aef4596f8', 'SE2L0OQUBT', 'service_appointed', 'জনাব MD HALIM MIA,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য সার্ভিস করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : Shanjida Naj
কাস্টমার ফোন : 01950737386
কাস্টমার সার্ভিস আই ডি নং : SEYVGZZS6F
প্রোডাক্ট মডেল : SEPI 1250 VA DSP IPS 850 VA EXCHANGE 8000 TK(-) 
কাস্টমার লোকেশন : Khadimpara , road - 03 Shahporan
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন https://seelectronicspro.vercel.app/service-report?serviceId=SEYVGZZS6F', '/staff/tasks', false, '2026-07-21 05:38:56.655782+00');
INSERT INTO public."staffNotifications" VALUES ('ef9ae17d-ec63-4283-99cc-79283d6dfbb5', 'SE2L0OQUBT', 'account_status', 'প্রিয় MD HALIM MIA,
আপনার অ্যাকাউন্টটি পুনরায় সক্রিয় (Activated) করা হয়েছে। আপনি এখন লগইন করে কাজ করতে পারবেন। 09649355555', '/staff/profile', false, '2026-07-21 05:54:21.113719+00');
INSERT INTO public."staffNotifications" VALUES ('b46872f6-666d-44b9-8bd0-a3f253721b1c', 'SETJ1RPUO8', 'service_appointed', 'জনাব Shabuddin Mahamud,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য সার্ভিস করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : Talha Khan Customer
কাস্টমার ফোন : +8801717051054
কাস্টমার সার্ভিস আই ডি নং : SEXNG76MVQ
প্রোডাক্ট মডেল : vvedceer3
কাস্টমার লোকেশন : dhaka
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন https://seelectronicspro.vercel.app/service-report?serviceId=SEXNG76MVQ', '/staff/tasks', false, '2026-07-21 06:38:11.245026+00');
INSERT INTO public."staffNotifications" VALUES ('2f939322-3ac8-47fe-9a99-952db407dcc5', 'SE2L0OQUBT', 'balance_added', 'Admin added ৳10 to your balance for job #SEDMVUT0WI.', '/staff/payment', false, '2026-07-21 12:05:52.975377+00');
INSERT INTO public."staffNotifications" VALUES ('ea2f3c61-e9e4-46f7-9962-8d1d43604ab8', 'SETJ1RPUO8', 'balance_added', 'Admin added ৳2000 to your balance for job #SECT2696HO.', '/staff/payment', false, '2026-07-21 12:06:17.256491+00');
INSERT INTO public."staffNotifications" VALUES ('22f3f9bc-23e1-4220-836c-fd9f9bd7d262', 'SETJ1RPUO8', 'balance_added', 'Admin added ৳1000 to your balance for job #SEVWV8BY6C.', '/staff/payment', false, '2026-07-21 12:06:27.971561+00');
INSERT INTO public."staffNotifications" VALUES ('2b4caa85-7ddf-4c27-9766-c2fd42fb70dd', 'SETJ1RPUO8', 'balance_added', 'Admin added ৳100 to your balance for job #SEXNG76MVQ.', '/staff/payment', false, '2026-07-21 15:59:09.328983+00');
INSERT INTO public."staffNotifications" VALUES ('c66474bf-d9ac-4882-a48d-9afa7440e34f', 'SETJ1RPUO8', 'service_appointed', 'জনাব Shabuddin Mahamud,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য সার্ভিস করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : Talha Khan Customer
কাস্টমার ফোন : +8801717051054
কাস্টমার সার্ভিস আই ডি নং : SEXNG76MVQ
প্রোডাক্ট মডেল : vvedceer3
কাস্টমার লোকেশন : dhaka
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন https://seelectronicspro.vercel.app/service-report?serviceId=SEXNG76MVQ', '/staff/tasks', false, '2026-07-21 18:58:37.220057+00');
INSERT INTO public."staffNotifications" VALUES ('f2f4ed04-8cc1-42ca-b946-c0ef9b1a17b5', 'SETJ1RPUO8', 'service_appointed', 'জনাব Shabuddin Mahamud,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য সার্ভিস করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : Talha Khan Customer
কাস্টমার ফোন : +8801717051054
কাস্টমার সার্ভিস আই ডি নং : SE09KPW1IT
প্রোডাক্ট মডেল : few2332cfw
কাস্টমার লোকেশন : dhaka
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন https://seelectronicspro.vercel.app/service-report?serviceId=SE09KPW1IT', '/staff/tasks', true, '2026-07-22 05:21:35.608643+00');
INSERT INTO public."staffNotifications" VALUES ('53daa79c-3a29-4156-b18d-1e0cfd93ca00', 'SEQ2FBJ75J', 'account_status', 'প্রিয় HALIM MIA,
আপনার অ্যাকাউন্টটি পুনরায় সক্রিয় (Activated) করা হয়েছে। আপনি এখন লগইন করে কাজ করতে পারবেন। 09649355555', '/staff/profile', true, '2026-07-21 05:54:44.134539+00');
INSERT INTO public."staffNotifications" VALUES ('6bc3d6e6-74dd-43d6-b9c7-ec78f8d281d7', 'SEQQTONWQD', 'service_appointed', 'জনাব Anuar Ahmed,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য সার্ভিস করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : Md 
কাস্টমার ফোন : 01310673600
কাস্টমার সার্ভিস আই ডি নং : SEFYEJ8TEH
প্রোডাক্ট মডেল : SE IPS 1050 VA 
কাস্টমার লোকেশন : Sylhet
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন https://seelectronicspro.vercel.app/service-report?serviceId=SEFYEJ8TEH', '/staff/tasks', true, '2026-08-25 22:15:21.11804+00');
INSERT INTO public."staffNotifications" VALUES ('c97bfd0b-c7a4-4346-8df1-248c68ff416b', 'SETJ1RPUO8', 'service_appointed', 'জনাব Shabuddin Mahamud,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য সার্ভিস করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : MD AHILL MAHAMUD
কাস্টমার ফোন : 01322247774
কাস্টমার সার্ভিস আই ডি নং : SECXA773DJ
প্রোডাক্ট মডেল : SEPI 1050 VA DSP SINE WAVE IPS 
কাস্টমার লোকেশন : Badambagicha Rd No. 4
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন https://seelectronicspro.vercel.app/service-report?serviceId=SECXA773DJ', '/staff/tasks', false, '2026-07-22 16:23:32.570157+00');
INSERT INTO public."staffNotifications" VALUES ('93c0b5a1-53de-443a-b58f-1e33025bce8b', 'SETJ1RPUO8', 'service_appointed', 'জনাব Shabuddin Mahamud,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য সার্ভিস করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : Ripa Mahamud
কাস্টমার ফোন : 01310673600
কাস্টমার সার্ভিস আই ডি নং : SEX70E6YCJ
প্রোডাক্ট মডেল : STB 1000 VA DIGITAL STABILIZER
কাস্টমার লোকেশন : Badambagicha Rd No. 4
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন https://seelectronicspro.vercel.app/service-report?serviceId=SEX70E6YCJ', '/staff/tasks', false, '2026-07-23 07:01:50.223401+00');
INSERT INTO public."staffNotifications" VALUES ('fa87b1fe-8116-4012-873d-9a92cde57c37', 'SEQ2FBJ75J', 'service_appointed', 'জনাব HALIM MIA,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য IPS ইন্সটল করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : Majida Chowdhury
কাস্টমার ফোন : 01710932413
কাস্টমার সার্ভিস আই ডি নং : SEFXHSDOCW
প্রোডাক্ট মডেল : SEPI 650 VA DSP SINE WAVE IPS
কাস্টমার লোকেশন : Jalalabad 37. House No. 37/2 Mannan Villa Sylhet
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন https://seelectronicspro.vercel.app/service-report?serviceId=SEFXHSDOCW', '/staff/tasks', false, '2026-07-25 06:26:23.025104+00');
INSERT INTO public."staffNotifications" VALUES ('8263bbe8-9190-4015-9ea3-e71631aa19fb', 'SETJ1RPUO8', 'service_appointed', 'জনাব Shabuddin Mahamud,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য সার্ভিস করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : Ripa Mahamud
কাস্টমার ফোন : 01310673600
কাস্টমার সার্ভিস আই ডি নং : SEJMWXJTY0
প্রোডাক্ট মডেল : STB 1000 VA DIGITAL STABILIZER
কাস্টমার লোকেশন : Badambagicha Rd No. 4
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন https://seelectronicspro.vercel.app/service-report?serviceId=SEJMWXJTY0', '/staff/tasks', false, '2026-07-25 13:15:40.061249+00');
INSERT INTO public."staffNotifications" VALUES ('0cdb72c7-4f3d-4be6-9461-7d84119ca39c', 'SETJ1RPUO8', 'certificate', 'প্রিয় talha সার্ভিস পয়েন্ট SEELECTRONICS আপনাকে সার্টিফিকেট প্রধান করেছে ডাউনলোড করে সংরক্ষণ করুন ভবিষ্যতে সকল সুযোগ সুবিধার পাওয়ার জন্য
https://seelectronicspro.vercel.app/pdf/download?token=2fba8f9fc94b428dfbcbd334f33cbd1c', '/staff/profile', true, '2026-07-26 05:19:47.888073+00');
INSERT INTO public."staffNotifications" VALUES ('614793c7-dc23-43bd-9aa7-6e8dfac30ea5', 'SETJ1RPUO8', 'certificate', 'প্রিয় null সার্ভিস পয়েন্ট SEELECTRONICS আপনাকে সার্টিফিকেট প্রধান করেছে ডাউনলোড করে সংরক্ষণ করুন ভবিষ্যতে সকল সুযোগ সুবিধার পাওয়ার জন্য
https://seelectronicspro.vercel.app/pdf/download?token=3be8abe4000637e6de38af0e9ac0e989', '/staff/profile', true, '2026-07-26 05:21:10.219782+00');
INSERT INTO public."staffNotifications" VALUES ('c7c617d5-c8ad-45a7-bb32-236bbce18ae0', 'SETJ1RPUO8', 'id_card', 'প্রিয় Shabuddin Mahamud,
এস ই ইলেকট্রনিকস সার্ভিস পয়েন্ট আপনাকে স্বাগতম আপনার টেকনিশিয়ান আই ডি কার্ড টি ডাউনলোড করতে লিংকটি ক্লিক করুন।
https://seelectronicspro.vercel.app/pdf/download?token=9175068b00d63545b3828ebf068c757b
কাস্টমার কেয়ার 0964935555', '/staff/profile', true, '2026-07-27 17:42:22.8336+00');
INSERT INTO public."staffNotifications" VALUES ('74cb065e-7e83-4f3f-8d4f-fa3cbc47e5a6', 'SEQQTONWQD', 'service_appointed', 'জনাব Anuar Ahmed,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য সার্ভিস করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : Shabuddin Mahamud
কাস্টমার ফোন : 01310673600
কাস্টমার সার্ভিস আই ডি নং : SEM7WP5GO3
প্রোডাক্ট মডেল : SEPI1050 VA DSP SINE WAVE IPS 
কাস্টমার লোকেশন : Badambagicha Rd No. 4 Sylhet 
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন https://seelectronicspro.vercel.app/service-report?serviceId=SEM7WP5GO3', '/staff/tasks', false, '2026-07-27 19:54:55.828284+00');
INSERT INTO public."staffNotifications" VALUES ('1dd07d84-2575-4a9b-bc49-8742cb35f0f8', 'SEQQTONWQD', 'service_appointed', 'জনাব Anuar Ahmed,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য সার্ভিস করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : Ripa Mahamud
কাস্টমার ফোন : 01310673600
কাস্টমার সার্ভিস আই ডি নং : SE9P4TN8HF
প্রোডাক্ট মডেল : STB 1000 VA DIGITAL STABILIZER
কাস্টমার লোকেশন : Badambagicha Rd No. 4
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন https://seelectronicspro.vercel.app/service-report?serviceId=SE9P4TN8HF', '/staff/tasks', false, '2026-07-27 20:28:28.737203+00');
INSERT INTO public."staffNotifications" VALUES ('f6d50cd2-a1f0-493a-bc2d-6a423a37904e', 'SEQQTONWQD', 'service_appointed', 'জনাব Anuar Ahmed,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য সার্ভিস করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : Ripa Mahamud
কাস্টমার ফোন : 01310673600
কাস্টমার সার্ভিস আই ডি নং : SE9P4TN8HF
প্রোডাক্ট মডেল : STB 1000 VA DIGITAL STABILIZER
কাস্টমার লোকেশন : Badambagicha Rd No. 4
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন https://seelectronicspro.vercel.app/service-report?serviceId=SE9P4TN8HF', '/staff/tasks', false, '2026-07-27 20:30:51.766398+00');
INSERT INTO public."staffNotifications" VALUES ('b3c7f1f3-9c5e-4037-a298-1a8882c9e5e9', 'SEQQTONWQD', 'balance_added', 'Admin added ৳500 to your balance for job #SE9P4TN8HF.', '/staff/payment', true, '2026-07-27 20:38:12.431193+00');
INSERT INTO public."staffNotifications" VALUES ('58a66591-0bfe-47e0-b618-323eda48a510', 'SEQQTONWQD', 'service_appointed', 'জনাব Anuar Ahmed,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য সার্ভিস করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : Ripa Mahamud
কাস্টমার ফোন : 01310673600
কাস্টমার সার্ভিস আই ডি নং : SEZIYMUAYG
প্রোডাক্ট মডেল : STB 1000 VA DIGITAL STABILIZER
কাস্টমার লোকেশন : Badambagicha Rd No. 4
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন https://seelectronicspro.vercel.app/service-report?serviceId=SEZIYMUAYG', '/staff/tasks', true, '2026-07-27 20:46:30.625846+00');
INSERT INTO public."staffNotifications" VALUES ('e158a381-addb-428d-b31c-26e31ea4f584', 'SEQQTONWQD', 'balance_added', 'Admin added ৳100 to your balance for job #SE0L1SFOOH.', '/staff/payment', true, '2026-07-27 20:45:17.180359+00');
INSERT INTO public."staffNotifications" VALUES ('e17388d7-fabb-4cb6-a6cb-ab3238f2d8e0', 'SETJ1RPUO8', 'id_card', 'প্রিয় Shabuddin Mahamud,
এস ই ইলেকট্রনিকস সার্ভিস পয়েন্ট আপনাকে স্বাগতম আপনার টেকনিশিয়ান আই ডি কার্ড টি ডাউনলোড করতে লিংকটি ক্লিক করুন।
https://seelectronicspro.vercel.app/pdf/download?token=7ca44195595d287a0a97ea44c10c60d8
কাস্টমার কেয়ার 0964935555', '/staff/profile', true, '2026-07-29 05:13:12.529848+00');
INSERT INTO public."staffNotifications" VALUES ('00db7f23-3910-4e76-9750-b6f5b7f02027', 'SEQQTONWQD', 'service_appointed', 'জনাব Anuar Ahmed,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য সার্ভিস করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : Ripa Mahamud
কাস্টমার ফোন : 01310673600
কাস্টমার সার্ভিস আই ডি নং : SE0L1SFOOH
প্রোডাক্ট মডেল : STB 1000 VA DIGITAL STABILIZER
কাস্টমার লোকেশন : Badambagicha Rd No. 4
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন https://seelectronicspro.vercel.app/service-report?serviceId=SE0L1SFOOH', '/staff/tasks', true, '2026-07-27 20:37:15.419478+00');
INSERT INTO public."staffNotifications" VALUES ('ad2076bd-fe94-448b-a0b7-5a15dec9f1c3', 'SEQQTONWQD', 'certificate', 'প্রিয় Md Ahil Mahamud সার্ভিস পয়েন্ট SEELECTRONICS আপনাকে সার্টিফিকেট প্রধান করেছে ডাউনলোড করে সংরক্ষণ করুন ভবিষ্যতে সকল সুযোগ সুবিধার পাওয়ার জন্য
https://seelectronicspro.vercel.app/staff/certificate?token=71f7c11274a6d947652e093ba23639c2', '/staff/certificate?token=71f7c11274a6d947652e093ba23639c2', true, '2026-08-02 18:49:53.601373+00');
INSERT INTO public."staffNotifications" VALUES ('4dcdf466-5a6c-4766-b810-52cfacee61c0', 'SE2L0OQUBT', 'service_appointed', 'জনাব MD HALIM MIA,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য সার্ভিস করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : Samad Ahmed
কাস্টমার ফোন : 01813164570
কাস্টমার সার্ভিস আই ডি নং : SEPKD27390
প্রোডাক্ট মডেল : MSP SE 850 VA IPS NOT CHRGING BACKUP
কাস্টমার লোকেশন : zinda bazer sylhet
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন https://seelectronicspro.vercel.app/service-report?serviceId=SEPKD27390', '/staff/tasks', true, '2026-08-03 13:58:24.747263+00');
INSERT INTO public."staffNotifications" VALUES ('c4a67494-4a7d-4e23-bb81-99f62212dc9e', 'SEQQTONWQD', 'account_status', 'প্রিয় Anuar Ahmed,
আপনার অ্যাকাউন্টটি সাময়িকভাবে বন্ধ (Blocked) করা হয়েছে। বিস্তারিত জানতে বা অ্যাকাউন্টটি সক্রিয় করতে এডমিনের সাথে যোগাযোগ করুন। বিস্তারিত জানতে 09649355555', '/staff/profile', true, '2026-08-03 18:50:00.839082+00');
INSERT INTO public."staffNotifications" VALUES ('04788e04-3a7f-4031-8937-6e3c5a3b8e77', 'SEQQTONWQD', 'account_status', 'প্রিয় Anuar Ahmed,
আপনার অ্যাকাউন্টটি পুনরায় সক্রিয় (Activated) করা হয়েছে। আপনি এখন লগইন করে কাজ করতে পারবেন। 09649355555', '/staff/profile', true, '2026-08-03 18:56:19.449818+00');
INSERT INTO public."staffNotifications" VALUES ('8e1737e5-217a-41b3-aa1b-0e21cfe3d272', 'SEQQTONWQD', 'account_status', 'প্রিয় Anuar Ahmed,
আপনার অ্যাকাউন্টটি সাময়িকভাবে বন্ধ (Blocked) করা হয়েছে। বিস্তারিত জানতে বা অ্যাকাউন্টটি সক্রিয় করতে এডমিনের সাথে যোগাযোগ করুন। বিস্তারিত জানতে 09649355555', '/staff/profile', true, '2026-08-03 18:54:12.245943+00');
INSERT INTO public."staffNotifications" VALUES ('e7cd82d3-832a-4137-968c-92d156a5c274', 'SEQQTONWQD', 'account_status', 'প্রিয় Anuar Ahmed,
আপনার অ্যাকাউন্টটি পুনরায় সক্রিয় (Activated) করা হয়েছে। আপনি এখন লগইন করে কাজ করতে পারবেন। 09649355555', '/staff/profile', true, '2026-08-03 18:53:03.745186+00');
INSERT INTO public."staffNotifications" VALUES ('f9f85118-bc23-43ad-97ff-b0485e7c5e81', 'SE2L0OQUBT', 'service_appointed', 'জনাব MD HALIM MIA,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য সার্ভিস করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : Mr
কাস্টমার ফোন : 01717317401
কাস্টমার সার্ভিস আই ডি নং : SED603PVPW
প্রোডাক্ট মডেল : Not warking
কাস্টমার লোকেশন : Amber Khana Sylhet
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন https://seelectronicspro.vercel.app/service-report?serviceId=SED603PVPW', '/staff/tasks', true, '2026-08-04 10:11:36.880995+00');
INSERT INTO public."staffNotifications" VALUES ('c1eea8a8-373a-453e-a77f-0d438faa6810', 'SEQ2FBJ75J', 'service_appointed', 'জনাব HALIM MIA,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য IPS ইন্সটল করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : Md Monir Ahmed
কাস্টমার ফোন : 01710460124
কাস্টমার সার্ভিস আই ডি নং : SEVTH0NE5K
প্রোডাক্ট মডেল : SEPI 1050 VA DSP SINE WAVE IPS 
কাস্টমার লোকেশন : Shobid bazar kola para noton Moshjid Sylhet 
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন https://seelectronicspro.vercel.app/service-report?serviceId=SEVTH0NE5K', '/staff/tasks', true, '2026-08-02 13:32:27.976958+00');
INSERT INTO public."staffNotifications" VALUES ('5c44d740-d279-484c-9850-3c91c2fbcdcd', 'SEQQTONWQD', 'service_appointed', 'জনাব Anuar Ahmed,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য সার্ভিস করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : Shabuddin Mahamud
কাস্টমার ফোন : 01310673600
কাস্টমার সার্ভিস আই ডি নং : SEFV4SW4EX
প্রোডাক্ট মডেল : 1050 va ips
কাস্টমার লোকেশন : Sylhet Bangladesh bznd
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন https://seelectronicspro.vercel.app/service-report?serviceId=SEFV4SW4EX', '/staff/tasks', true, '2026-08-04 10:36:14.940495+00');
INSERT INTO public."staffNotifications" VALUES ('5f16e90d-8e9b-423a-81fb-8e847468f6f7', 'SE2L0OQUBT', 'service_appointed', 'জনাব MD HALIM MIA,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য সার্ভিস করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : MD HADI
কাস্টমার ফোন : 01717020773
কাস্টমার সার্ভিস আই ডি নং : SETSEA3JAO
প্রোডাক্ট মডেল : SEPI 1050 VA DSPx SINE WABVE IPS
কাস্টমার লোকেশন : PIRMOHOLLA MOSHJID GOLLI 148/38 MAHAMUD VILA
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন https://seelectronicspro.vercel.app/service-report?serviceId=SETSEA3JAO', '/staff/tasks', false, '2026-08-11 12:11:14.794794+00');
INSERT INTO public."staffNotifications" VALUES ('3f6915c2-e100-489d-b0cd-8dc4617a1a6e', 'SETJ1RPUO8', 'balance_added', 'Admin added ৳500 to your balance for job #SEJMWXJTY0.', '/staff/payment', false, '2026-08-11 21:29:38.643363+00');
INSERT INTO public."staffNotifications" VALUES ('cdf8526c-1141-4b14-bdbc-65a5095a6145', 'SEQ2FBJ75J', 'service_appointed', 'জনাব HALIM MIA,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য IPS ইন্সটল করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : FATIMA INTR
কাস্টমার ফোন : 01713822845
কাস্টমার সার্ভিস আই ডি নং : SE2JYULTV0
প্রোডাক্ট মডেল : SEPI 1250 VA DSP SINE WAVE 12 IPS
কাস্টমার লোকেশন : 1no rob menshen vip road jito mia point sylhet
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন https://seelectronicspro.vercel.app/service-report?serviceId=SE2JYULTV0', '/staff/tasks', false, '2026-08-13 08:04:49.370134+00');
INSERT INTO public."staffNotifications" VALUES ('9976ffc7-25e5-4cab-bbff-49a98277d09c', 'SETJ1RPUO8', 'payment_update', 'Your payment of ৳1000 has been completed!', '/staff/payment', true, '2026-08-14 20:28:59.788153+00');
INSERT INTO public."staffNotifications" VALUES ('190481db-6ffd-4808-ba3d-30d36bd5aecc', 'SETJ1RPUO8', 'payment_update', 'Your payment request of ৳1000 has been approved and is being processed.', '/staff/payment', true, '2026-08-14 20:28:35.598714+00');
INSERT INTO public."staffNotifications" VALUES ('f3ffd5a5-b873-49af-a47c-c03ea350a14b', 'SETJ1RPUO8', 'payment_update', 'Your payment of ৳400 has been completed!', '/staff/payment', true, '2026-08-11 21:38:00.17904+00');
INSERT INTO public."staffNotifications" VALUES ('d30f363a-43bc-4c7b-8f21-2440cb851344', 'SETJ1RPUO8', 'payment_update', 'Your payment request of ৳400 has been approved and is being processed.', '/staff/payment', true, '2026-08-11 21:37:24.290568+00');
INSERT INTO public."staffNotifications" VALUES ('20fc2a59-f79a-4514-8291-b5fd74956e3c', 'SEQQTONWQD', 'payment_update', 'Your payment of ৳150 has been completed!', '/staff/payment', true, '2026-08-11 21:22:55.315689+00');
INSERT INTO public."staffNotifications" VALUES ('9b305bc3-679e-46ee-9848-c87a495d09ef', 'SEQQTONWQD', 'payment_update', 'Your payment request of ৳150 has been approved and is being processed.', '/staff/payment', true, '2026-08-11 21:18:06.79503+00');
INSERT INTO public."staffNotifications" VALUES ('0f5fcc67-a574-4944-9bb9-4b0e1740f6b2', 'SEQQTONWQD', 'payment_update', 'Your payment of ৳300 has been completed!', '/staff/payment', true, '2026-08-11 21:16:01.246559+00');
INSERT INTO public."staffNotifications" VALUES ('83fc2a5e-10ae-4169-8fed-0565aac732bf', 'SEQQTONWQD', 'payment_update', 'Your payment request of ৳300 has been approved and is being processed.', '/staff/payment', true, '2026-08-11 21:12:41.980539+00');
INSERT INTO public."staffNotifications" VALUES ('b1344485-e618-4669-b329-1548e3acf420', 'SETJ1RPUO8', 'service_appointed', 'জনাব Shabuddin Mahamud,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য সার্ভিস করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : Ripa Mahamud
কাস্টমার ফোন : 01310673600
কাস্টমার সার্ভিস আই ডি নং : SEI67FXH04
প্রোডাক্ট মডেল : STB 1000 VA DIGITAL STABILIZER
কাস্টমার লোকেশন : Badambagicha Rd No. 4
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন https://seelectronicspro.vercel.app/service-report?serviceId=SEI67FXH04', '/staff/tasks', true, '2026-07-27 06:02:57.814652+00');
INSERT INTO public."staffNotifications" VALUES ('186e92a2-914e-477d-bfbf-ff17d9ba8d3d', 'SEQ2FBJ75J', 'service_appointed', 'জনাব HALIM MIA,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য IPS ইন্সটল করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : MD. RAKIB HUSSEN
কাস্টমার ফোন : 01304761002
কাস্টমার সার্ভিস আই ডি নং : SEBCBQY8QO
প্রোডাক্ট মডেল : SEP 500 VA SQ
কাস্টমার লোকেশন : Shobid bazar  Sylhet 
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন https://seelectronicspro.vercel.app/service-report?serviceId=SEBCBQY8QO', '/staff/tasks', false, '2026-08-15 14:17:11.197675+00');
INSERT INTO public."staffNotifications" VALUES ('7f431966-b671-4c63-8f8a-2e449761fc7b', 'SEQ2FBJ75J', 'service_appointed', 'জনাব HALIM MIA,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য IPS ইন্সটল করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : Nazmul Motin
কাস্টমার ফোন : 01711778531
কাস্টমার সার্ভিস আই ডি নং : SETM13C0HL
প্রোডাক্ট মডেল : Luminus 1050 
কাস্টমার লোকেশন : 49 Saodagar Tola kumar para Sylhet 
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন https://seelectronicspro.vercel.app/service-report?serviceId=SETM13C0HL', '/staff/tasks', false, '2026-08-21 08:25:28.429445+00');
INSERT INTO public."staffNotifications" VALUES ('25ebcce7-09ce-40a6-8dd2-900be72c65ad', 'SEQ2FBJ75J', 'service_appointed', 'জনাব HALIM MIA,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য IPS ইন্সটল করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : Mss. Eva 
কাস্টমার ফোন : 01775400814
কাস্টমার সার্ভিস আই ডি নং : SE53W3BWD7
প্রোডাক্ট মডেল : SEPI 1050 VA SQ IPS KST
কাস্টমার লোকেশন : 103/a block d Islampur mejortila sylhet 
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন https://seelectronicspro.vercel.app/service-report?serviceId=SE53W3BWD7', '/staff/tasks', false, '2026-08-23 10:09:38.52121+00');
INSERT INTO public."staffNotifications" VALUES ('c5790ea4-dccd-4b78-9eb5-6d1a8c8523fd', 'SETJ1RPUO8', 'service_appointed', 'জনাব Shabuddin Mahamud,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য সার্ভিস করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : Ripa Mahamud
কাস্টমার ফোন : 01310673600
কাস্টমার সার্ভিস আই ডি নং : SEZIYMUAYG
প্রোডাক্ট মডেল : STB 1000 VA DIGITAL STABILIZER
কাস্টমার লোকেশন : Badambagicha Rd No. 4
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন https://seelectronicspro.vercel.app/service-report?serviceId=SEZIYMUAYG', '/staff/tasks', true, '2026-08-14 22:20:05.592778+00');
INSERT INTO public."staffNotifications" VALUES ('75962d4f-2989-457c-a072-18ebf2782df5', 'SEQ2FBJ75J', 'service_appointed', 'জনাব HALIM MIA,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য IPS ইন্সটল করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : Mr. Khurshed Alam
কাস্টমার ফোন : 01716442141
কাস্টমার সার্ভিস আই ডি নং : SE8603YSLQ
প্রোডাক্ট মডেল : SEPI 1500 VA 24 V DSP IPS
কাস্টমার লোকেশন : Kasba Chargachh Bazar Brahmin Bariya
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন https://seelectronicspro.vercel.app/service-report?serviceId=SE8603YSLQ', '/staff/tasks', false, '2026-08-24 03:54:12.925336+00');
INSERT INTO public."staffNotifications" VALUES ('6d6bfd7b-bd5d-432f-9cbb-ab2fdae69545', 'SEQQTONWQD', 'service_appointed', 'জনাব Anuar Ahmed,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য সার্ভিস করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : Md 
কাস্টমার ফোন : 01310673600
কাস্টমার সার্ভিস আই ডি নং : SEJNAJHH3V
প্রোডাক্ট মডেল : SE IPS 1050 VA 
কাস্টমার লোকেশন : Sylhet
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন https://seelectronicspro.vercel.app/service-report?serviceId=SEJNAJHH3V', '/staff/tasks', false, '2026-08-26 07:00:35.428883+00');
INSERT INTO public."staffNotifications" VALUES ('f4197b09-8e96-443a-9128-897bf60a61cb', 'SEQQTONWQD', 'balance_added', 'Admin added ৳1200 to your balance for job #SEFYEJ8TEH.', '/staff/payment', false, '2026-08-26 07:21:08.322878+00');
INSERT INTO public."staffNotifications" VALUES ('4fb139c0-05a6-493a-adda-3a4671dae185', 'SEQQTONWQD', 'service_appointed', 'জনাব Anuar Ahmed,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য সার্ভিস করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : MD SHABUDDIN2
কাস্টমার ফোন : 01310673600
কাস্টমার সার্ভিস আই ডি নং : SE8W252AZQ
প্রোডাক্ট মডেল : SEPI 1250 VA DSP SINE WAVE IPS
কাস্টমার লোকেশন : Badambagicha Rd No. 4 Sylhet 
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন https://seelectronicspro.vercel.app/service-report?serviceId=SE8W252AZQ', '/staff/tasks', true, '2026-08-26 07:17:32.373497+00');
INSERT INTO public."staffNotifications" VALUES ('e884e965-c703-4b44-8b04-f2d0ac804270', 'SE2L0OQUBT', 'service_appointed', 'জনাব MD HALIM MIA,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য সার্ভিস করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : MD SHABUDDIN2
কাস্টমার ফোন : 01310673600
কাস্টমার সার্ভিস আই ডি নং : SEG1PF6UD3
প্রোডাক্ট মডেল : SEPI 1250 VA DSP SINE WAVE IPS
কাস্টমার লোকেশন : Badambagicha Rd No. 4 Sylhet 
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন https://seelectronicspro.vercel.app/service-report?serviceId=SEG1PF6UD3', '/staff/tasks', false, '2026-08-26 15:13:50.548855+00');
INSERT INTO public."staffNotifications" VALUES ('99380d9b-0956-4e5d-866b-c8e3bd5ffc13', 'SEQQTONWQD', 'service_appointed', 'জনাব Anuar Ahmed,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য সার্ভিস করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : MD SHABUDDIN2
কাস্টমার ফোন : 01310673600
কাস্টমার সার্ভিস আই ডি নং : SENFCVT7C3
প্রোডাক্ট মডেল : SEPI 1250 VA DSP SINE WAVE IPS
কাস্টমার লোকেশন : Badambagicha Rd No. 4 Sylhet 
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন https://seelectronicspro.vercel.app/service-report?serviceId=SENFCVT7C3', '/staff/tasks', false, '2026-08-27 05:19:35.109616+00');
INSERT INTO public."staffNotifications" VALUES ('44f3dfcf-4fb9-4aba-9af4-722c05d584db', 'SEQ2FBJ75J', 'service_appointed', 'জনাব HALIM MIA,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য IPS ইন্সটল করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : MD SHABUDDIN2
কাস্টমার ফোন : 01310673600
কাস্টমার সার্ভিস আই ডি নং : SEH8HZFTT0
প্রোডাক্ট মডেল : SEPI 1250 VA DSP SINE WAVE IPS
কাস্টমার লোকেশন : Badambagicha Rd No. 4 Sylhet 
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন https://seelectronicspro.vercel.app/service-report?serviceId=SEH8HZFTT0', '/staff/tasks', false, '2026-08-27 06:57:06.923733+00');
INSERT INTO public."staffNotifications" VALUES ('005738a3-c289-4663-b847-bcf32ac56f5e', 'SEQQTONWQD', 'service_appointed', 'জনাব Anuar Ahmed,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য সার্ভিস করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : MD SHABUDDIN2
কাস্টমার ফোন : 01310673600
কাস্টমার সার্ভিস আই ডি নং : SETE2LDWDU
প্রোডাক্ট মডেল : SEPI 1250 VA DSP SINE WAVE IPS
কাস্টমার লোকেশন : Badambagicha Rd No. 4 Sylhet 
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন https://seelectronicspro.vercel.app/service-report?serviceId=SETE2LDWDU', '/staff/tasks', false, '2026-08-27 07:00:27.998257+00');
INSERT INTO public."staffNotifications" VALUES ('9044c487-75af-4162-9421-af252f503809', 'SEQQTONWQD', 'service_appointed', 'জনাব Anuar Ahmed,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য সার্ভিস করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : Shabuddin Mahamud
কাস্টমার ফোন : 01310673600
কাস্টমার সার্ভিস আই ডি নং : SECC9XPIHN
প্রোডাক্ট মডেল : SEPI1050 VA DSP SINE WAVE IPS 
কাস্টমার লোকেশন : Badambagicha Rd No. 4 Sylhet 
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন https://seelectronicspro.vercel.app/service-report?serviceId=SECC9XPIHN', '/staff/tasks', true, '2026-08-27 07:19:38.538+00');
INSERT INTO public."staffNotifications" VALUES ('27d262e6-1444-45a5-9c1c-fd2816b8a9da', 'SE2L0OQUBT', 'service_appointed', 'জনাব MD HALIM MIA,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য সার্ভিস করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : MD SHABUDDIN2
কাস্টমার ফোন : 01310673600
কাস্টমার সার্ভিস আই ডি নং : SEGEBJGISF
প্রোডাক্ট মডেল : SEPI 1250 VA DSP SINE WAVE IPS
কাস্টমার লোকেশন : Badambagicha Rd No. 4 Sylhet 
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন https://seelectronicspro.vercel.app/service-report?serviceId=SEGEBJGISF', '/staff/tasks', false, '2026-08-28 11:31:37.789322+00');
INSERT INTO public."staffNotifications" VALUES ('62dbf8a4-00aa-4b7b-9e19-233dc8a8ebee', 'SETJ1RPUO8', 'service_appointed', 'জনাব Shabuddin Mahamud,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য সার্ভিস করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : MD SHABUDDIN2
কাস্টমার ফোন : 01310673600
কাস্টমার সার্ভিস আই ডি নং : SEKXUBYAED
প্রোডাক্ট মডেল : SEPI 1250 VA DSP SINE WAVE IPS
কাস্টমার লোকেশন : Badambagicha Rd No. 4 Sylhet 
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন https://seelectronicspro.vercel.app/service-report?serviceId=SEKXUBYAED', '/staff/tasks', true, '2026-08-30 19:02:36.385957+00');
INSERT INTO public."staffNotifications" VALUES ('ba1f9e1e-7b40-40d3-9d0e-46afadd177af', 'SETJ1RPUO8', 'service_appointed', 'জনাব Shabuddin Mahamud,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য সার্ভিস করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : MD SHABUDDIN2
কাস্টমার ফোন : 01711754447
কাস্টমার সার্ভিস আই ডি নং : SEGVPMMAP8
প্রোডাক্ট মডেল : SEPI 1250 VA DSP SINE WAVE IPS
কাস্টমার লোকেশন : Badambagicha Rd No. 4 Sylhet 
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন https://seelectronicspro.vercel.app/service-report?serviceId=SEGVPMMAP8', '/staff/tasks', false, '2026-08-30 20:13:17.863418+00');
INSERT INTO public."staffNotifications" VALUES ('9e9877bb-8f90-4a7a-8f96-19aee9548cdd', 'SETJ1RPUO8', 'balance_added', 'Admin added ৳10 to your balance for job #SEGVPMMAP8.', '/staff/payment', false, '2026-08-30 20:33:20.559369+00');
INSERT INTO public."staffNotifications" VALUES ('eb225580-3658-4568-9988-3a1215a937fd', 'SETJ1RPUO8', 'service_appointed', 'জনাব Shabuddin Mahamud,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য সার্ভিস করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : Mr. Khurshed Alam
কাস্টমার ফোন : 01716442141
কাস্টমার সার্ভিস আই ডি নং : SEZO9YBPE3
প্রোডাক্ট মডেল : SEPI 1500 VA 24 V DSP IPS
কাস্টমার লোকেশন : Kasba Chargachh Bazar Brahmin Bariya
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন https://seelectronicspro.vercel.app/service-report?serviceId=SEZO9YBPE3', '/staff/tasks', false, '2026-08-30 20:42:41.007577+00');
INSERT INTO public."staffNotifications" VALUES ('45b332c7-443c-464b-95fe-94dd0768b7d2', 'SETJ1RPUO8', 'service_appointed', 'জনাব Shabuddin Mahamud,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য সার্ভিস করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : Shabuddin Mahamud
কাস্টমার ফোন : 01310673600
কাস্টমার সার্ভিস আই ডি নং : SE72GC7OCZ
প্রোডাক্ট মডেল : SEPI1050 VA DSP SINE WAVE IPS 
কাস্টমার লোকেশন : Badambagicha Rd No. 4 Sylhet 
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন https://seelectronicspro.vercel.app/service-report?serviceId=SE72GC7OCZ', '/staff/tasks', false, '2026-08-31 20:15:34.463286+00');
INSERT INTO public."staffNotifications" VALUES ('3df1b7e3-c876-49ed-b693-edd1d87062d2', 'SETJ1RPUO8', 'balance_added', 'Admin added ৳20 to your balance for job #SE72GC7OCZ.', '/staff/payment', false, '2026-08-31 20:23:57.97642+00');
INSERT INTO public."staffNotifications" VALUES ('23a40729-6492-44af-b074-04ab7d1879a8', 'SETJ1RPUO8', 'balance_added', 'Admin added ৳10 to your balance for job #SEZO9YBPE3.', '/staff/payment', false, '2026-08-31 20:24:31.367422+00');
INSERT INTO public."staffNotifications" VALUES ('3fd6a101-17e2-40da-960d-d5ef2ea10fe3', 'SETJ1RPUO8', 'service_appointed', 'জনাব Shabuddin Mahamud,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য সার্ভিস করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : MD SHABUDDIN2
কাস্টমার ফোন : 8801310673600
কাস্টমার সার্ভিস আই ডি নং : SESB216SLF
প্রোডাক্ট মডেল : SEPI 1250 VA DSP SINE WAVE IPS
কাস্টমার লোকেশন : Badambagicha Rd No. 4 Sylhet 
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন https://seelectronicspro.vercel.app/service-report?serviceId=SESB216SLF', '/staff/tasks', false, '2026-09-01 06:21:22.098912+00');
INSERT INTO public."staffNotifications" VALUES ('9f6099be-98ca-4e21-bf91-ba826c9cbed2', 'SETJ1RPUO8', 'balance_added', 'Admin added ৳320 to your balance for job #SEKXUBYAED.', '/staff/payment', false, '2026-09-01 06:29:48.147212+00');
INSERT INTO public."staffNotifications" VALUES ('c8333f1a-484e-49b6-a8c4-0fede542f982', 'SEQ2FBJ75J', 'service_appointed', 'জনাব HALIM MIA,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য IPS ইন্সটল করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : Mokhfur Chowdhury
কাস্টমার ফোন : 01730049205
কাস্টমার সার্ভিস আই ডি নং : SE3L24CRRM
প্রোডাক্ট মডেল : SEPI 1250 VA  DSP SINE WAVE IPS 
কাস্টমার লোকেশন : Shahjalal Tower, 27/2 Payra, Flat 7D, (Lift 7), Sylhet
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন https://seelectronicspro.vercel.app/service-report?serviceId=SE3L24CRRM', '/staff/tasks', false, '2026-09-02 05:14:23.309345+00');
INSERT INTO public."staffNotifications" VALUES ('fad81c2a-3c03-4af2-8439-1a52db45b8fd', 'SE2L0OQUBT', 'service_appointed', 'জনাব MD HALIM MIA,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য সার্ভিস করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : MD SHABUDDIN2
কাস্টমার ফোন : 01310673600
কাস্টমার সার্ভিস আই ডি নং : SEW0EPTD03
প্রোডাক্ট মডেল : SEPI 1250 VA DSP SINE WAVE IPS
কাস্টমার লোকেশন : Badambagicha Rd No. 4 Sylhet 
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন https://seelectronicspro.vercel.app/service-report?serviceId=SEW0EPTD03', '/staff/tasks', false, '2026-09-03 07:08:04.008723+00');
INSERT INTO public."staffNotifications" VALUES ('9aef88c9-e6b0-41d9-9fac-81d5929f2537', 'SEQQTONWQD', 'id_card', 'প্রিয় Anuar Ahmed,
এস ই ইলেকট্রনিকস সার্ভিস পয়েন্ট আপনাকে স্বাগতম আপনার টেকনিশিয়ান আই ডি কার্ড টি ডাউনলোড করতে লিংকটি ক্লিক করুন।
https://seelectronicspro.vercel.app/pdf/download?token=71b93582c2b8592bf519b6ee81408ca9
কাস্টমার কেয়ার 0964935555', '/staff/profile', false, '2026-09-03 18:11:40.671844+00');
INSERT INTO public."staffNotifications" VALUES ('4fae6c55-6d0a-4e32-af00-d8e411e2545a', 'SETJ1RPUO8', 'payment_update', 'Your payment request of ৳200 has been approved and is being processed.', '/staff/payment', false, '2026-09-08 05:39:53.776502+00');
INSERT INTO public."staffNotifications" VALUES ('de2a382f-a70f-479c-84f1-47ef3b85e96c', 'SETJ1RPUO8', 'payment_update', 'Your payment of ৳200 has been completed!', '/staff/payment', false, '2026-09-08 05:41:08.737553+00');


--
-- Data for Name: subscriptions; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.subscriptions VALUES ('5160785b-f7be-4049-996b-7203a2cd6a8d', 'SECP1SAA6C', 'SEWCFAWBYM', 'Shabuddin Mahamud', '01310673600', 'Badambagicha Rd No. 4', 'সিলেট', 'এয়ারপোর্ট', 'Sylhet sadar', 1, 'ips_and_battery_maintenance', 'হ্যামকো PCV 29 পেলেট', 'এস ই পাওয়ার আই পি এস', '1050 VA 12 Volt', 'bkash', 450.00, 0.00, 0.00, 450.00, '01322247771', 'SW23QY38PU', NULL, true, '37.111.218.246', 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Mobile Safari/537.36', 'active', 1, false, '2026-04-17 20:18:28.77407+00', '2026-04-17 20:33:20.028+00');


--
-- Data for Name: tasks; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.tasks VALUES ('883b3ffb-dc6c-4656-a408-cbd586b63dcb', 'SEJE8FU8L5', 'SEQ2FBJ75J', 'ইন্সটলেশন কাজ', 'জনাব HALIM MIA,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য IPS ইন্সটল করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : মো বিপ্লব তালুকদার
কাস্টমার ফোন : 01732599441
কাস্টমার সার্ভিস আই ডি নং : SE3NL80LG0
প্রোডাক্ট মডেল : SEPI 1050 VA DSP SINE WAVE  IPS 
কাস্টমার লোকেশন : শামীমাবাদ,মজুমদারপাড়া ৩রোড
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন http://localhost:3000/service-report?serviceId=SE3NL80LG0', 'normal', NULL, 'SE3NL80LG0', 'completed', NULL, NULL, '2026-04-18 08:58:40.871538+00', '2026-04-18 16:29:50.294+00');
INSERT INTO public.tasks VALUES ('50aa699e-91b2-4b24-b1a7-a406dc3ecf20', 'SEO7ZATPEI', 'SEQ2FBJ75J', 'ইন্সটলেশন কাজ', 'জনাব HALIM MIA,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য IPS ইন্সটল করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : MD AMINUR ROHOMAN
কাস্টমার ফোন : 01716563822
কাস্টমার সার্ভিস আই ডি নং : SE1IMT8LUF
প্রোডাক্ট মডেল : SEPI-1050 VA DSP SINE WAVE IPS 2.5 V
কাস্টমার লোকেশন : শামীমাবাদ,মজুমদারপাড়া ৩ রোড সিলেট
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন http://localhost:3000/service-report?serviceId=SE1IMT8LUF', 'normal', NULL, 'SE1IMT8LUF', 'completed', NULL, NULL, '2026-04-21 20:48:21.5962+00', '2026-04-21 20:49:23.182+00');
INSERT INTO public.tasks VALUES ('389aa68a-82ae-4f8f-95b5-e846b2c20d58', 'SEIEX37XVV', 'SEQ2FBJ75J', 'ইন্সটলেশন কাজ', 'জনাব HALIM MIA,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য IPS ইন্সটল করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : MD SHIEKH RAFI
কাস্টমার ফোন : 01851344473
কাস্টমার সার্ভিস আই ডি নং : SE2OP76BL6
প্রোডাক্ট মডেল : SEPI-1050 VA DSP SINE WAVW IPS
কাস্টমার লোকেশন : Agroni 96 Londoni Road Sylhit
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন http://localhost:3000/service-report?serviceId=SE2OP76BL6', 'normal', NULL, 'SE2OP76BL6', 'completed', NULL, NULL, '2026-04-22 20:35:12.650358+00', '2026-04-27 19:04:07.392+00');
INSERT INTO public.tasks VALUES ('eeae2e4c-34a6-471f-b86c-e49c3cc5b1cc', 'SEGB4PA8YK', 'SEQ2FBJ75J', 'ইন্সটলেশন কাজ', 'জনাব HALIM MIA,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য IPS ইন্সটল করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : MD MAMUN BAI 
কাস্টমার ফোন : 01911199796
কাস্টমার সার্ভিস আই ডি নং : SESPUXV13A
প্রোডাক্ট মডেল : SEPI 650 VA
কাস্টমার লোকেশন : Block E, Road 6, Spring Tower,  Uposhahor, Sylhet
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন https://seelectronicspro.vercel.app/service-report?serviceId=SESPUXV13A', 'normal', NULL, 'SESPUXV13A', 'completed', NULL, NULL, '2026-05-02 14:16:24.743795+00', '2026-05-04 11:15:21.17+00');
INSERT INTO public.tasks VALUES ('222969a6-bd5c-4200-a0c4-0bf3b0f3907e', 'SE6TZTU6GC', 'SEQ2FBJ75J', 'ইন্সটলেশন কাজ', 'জনাব HALIM MIA,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য IPS ইন্সটল করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : MD MASUD RANA
কাস্টমার ফোন : 01627562997
কাস্টমার সার্ভিস আই ডি নং : SE81XT2D1P
প্রোডাক্ট মডেল : SEPI 1050 VA DSP SINE WAVE IPS
কাস্টমার লোকেশন : SHAMIMABAD MOJUMDAR PARA SYLHET
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন https://seelectronicspro.vercel.app/service-report?serviceId=SE81XT2D1P', 'normal', NULL, 'SE81XT2D1P', 'completed', NULL, NULL, '2026-05-01 15:08:49.498704+00', '2026-05-01 20:21:22.3+00');
INSERT INTO public.tasks VALUES ('229bf9f8-53e1-4f15-b4c4-eafd736d8d62', 'SEXB4QECSR', 'SEQ2FBJ75J', 'ইন্সটলেশন কাজ', 'জনাব HALIM MIA,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য IPS ইন্সটল করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : Mokhfur Chowdhury
কাস্টমার ফোন : 01730049205
কাস্টমার সার্ভিস আই ডি নং : SE3L24CRRM
প্রোডাক্ট মডেল : SEPI 1250 VA  DSP SINE WAVE IPS 
কাস্টমার লোকেশন : Shahjalal Tower, 27/2 Payra, Flat 7D, (Lift 7), Sylhet
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন https://seelectronicspro.vercel.app/service-report?serviceId=SE3L24CRRM', 'normal', NULL, 'SE3L24CRRM', 'completed', NULL, NULL, '2026-09-02 05:14:23.294141+00', '2026-09-02 10:15:39.728+00');
INSERT INTO public.tasks VALUES ('906cd3bb-456a-4691-83bb-daefb49485c3', 'SEAYPQ4LS2', 'SEQ2FBJ75J', 'ইন্সটলেশন কাজ', 'জনাব HALIM MIA,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য IPS ইন্সটল করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : MD JOSHIM 
কাস্টমার ফোন : 01710972946
কাস্টমার সার্ভিস আই ডি নং : SEO6J6VL6J
প্রোডাক্ট মডেল : SEPI 850 VA DSP SINE WAVE IPS
কাস্টমার লোকেশন : Sherpur  chargers  brahmanbaria 
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন https://seelectronicspro.vercel.app/service-report?serviceId=SEO6J6VL6J', 'normal', NULL, 'SEO6J6VL6J', 'completed', NULL, NULL, '2026-05-05 06:37:33.191167+00', '2026-05-06 04:47:08.12+00');
INSERT INTO public.tasks VALUES ('ff59f3f1-dfa3-4473-94bc-cded78e50258', 'SEZ5X4MAQF', 'SEQ2FBJ75J', 'ইন্সটলেশন কাজ', 'জনাব HALIM MIA,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য IPS ইন্সটল করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : jamiatul khair al islamiya madrasah.
কাস্টমার ফোন : 01772133687
কাস্টমার সার্ভিস আই ডি নং : SEHWH20ZUH
প্রোডাক্ট মডেল : SEP 2 KVA 24 V DSP SINE WAVE IPS
কাস্টমার লোকেশন : Pir''s Bazar Chowdhury Para Boteswar Sylhet
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন https://seelectronicspro.vercel.app/service-report?serviceId=SEHWH20ZUH', 'normal', NULL, 'SEHWH20ZUH', 'completed', NULL, NULL, '2026-05-16 07:52:22.301543+00', '2026-05-17 07:18:07.368+00');
INSERT INTO public.tasks VALUES ('9cb6db66-3188-4ba2-be6e-6f74372a72d8', 'SEPDD2H3QD', 'SE2L0OQUBT', 'সার্ভিসিং কাজ', 'জনাব MD HALIM MIA,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য সার্ভিস করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : MD ABDUL MOTIN 
কাস্টমার ফোন : 01716387242
কাস্টমার সার্ভিস আই ডি নং : SECU0EX66G
প্রোডাক্ট মডেল : SEPI 1250 VA DSP IPS 
কাস্টমার লোকেশন : SHAMIMABAD MOHILA COL SYLHET 
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন https://seelectronicspro.vercel.app/service-report?serviceId=SECU0EX66G', 'normal', NULL, 'SECU0EX66G', 'completed', NULL, NULL, '2026-07-09 05:11:04.490263+00', '2026-08-04 10:46:59.907+00');
INSERT INTO public.tasks VALUES ('d500b573-2668-447f-945f-e3b785ae41e6', 'SEC3PDUYWJ', 'SE2L0OQUBT', 'সার্ভিসিং কাজ', 'জনাব MD HALIM MIA,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য সার্ভিস করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : jamiatul khair al islamiya madrasah.77000 
কাস্টমার ফোন : 01772133687
কাস্টমার সার্ভিস আই ডি নং : SEDMVUT0WI
প্রোডাক্ট মডেল : SEP 2 KVA 24 V DSP SINE WAVE IPS
কাস্টমার লোকেশন : Pir''s Bazar Chowdhury Para Boteswar Sylhet
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন https://seelectronicspro.vercel.app/service-report?serviceId=SEDMVUT0WI', 'normal', NULL, 'SEDMVUT0WI', 'completed', NULL, NULL, '2026-05-18 07:01:13.027494+00', '2026-05-21 07:24:24.985+00');
INSERT INTO public.tasks VALUES ('ca1f3e08-af1e-46e2-8c11-d295c3efa761', 'SEMEP2CGZM', 'SETJ1RPUO8', 'সার্ভিসিং কাজ', 'জনাব Shabuddin Mahamud,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য সার্ভিস করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : Shabuddin Mahamud
কাস্টমার ফোন : 01310673600
কাস্টমার সার্ভিস আই ডি নং : SEPVF9ZVSB
প্রোডাক্ট মডেল : SEPI1050 VA DSP SINE WAVE IPS 
কাস্টমার লোকেশন : Badambagicha Rd No. 4 Sylhet 
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন https://seelectronicspro.vercel.app/service-report?serviceId=SEPVF9ZVSB', 'normal', NULL, 'SEPVF9ZVSB', 'completed', NULL, NULL, '2026-06-28 23:26:58.737628+00', '2026-08-04 10:52:39.583+00');
INSERT INTO public.tasks VALUES ('34cfc79f-df5c-40e9-8d50-b0021916a509', 'SEDYXAPI3K', 'SEQ2FBJ75J', 'ইন্সটলেশন কাজ', 'জনাব HALIM MIA,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য IPS ইন্সটল করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : Majida Chowdhury
কাস্টমার ফোন : 01710932413
কাস্টমার সার্ভিস আই ডি নং : SEFXHSDOCW
প্রোডাক্ট মডেল : SEPI 650 VA DSP SINE WAVE IPS
কাস্টমার লোকেশন : Jalalabad 37. House No. 37/2 Mannan Villa Sylhet
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন https://seelectronicspro.vercel.app/service-report?serviceId=SEFXHSDOCW', 'normal', NULL, 'SEFXHSDOCW', 'completed', NULL, NULL, '2026-07-25 06:26:22.824233+00', '2026-08-14 09:22:08.848+00');
INSERT INTO public.tasks VALUES ('59c5d732-a52f-4f89-a23d-092d57dbc390', 'SE2CR9Q8F6', 'SEQ2FBJ75J', 'ইন্সটলেশন কাজ', 'জনাব HALIM MIA,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য IPS ইন্সটল করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : Md Monir Ahmed
কাস্টমার ফোন : 01710460124
কাস্টমার সার্ভিস আই ডি নং : SEVTH0NE5K
প্রোডাক্ট মডেল : SEPI 1050 VA DSP SINE WAVE IPS 
কাস্টমার লোকেশন : Shobid bazar kola para noton Moshjid Sylhet 
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন https://seelectronicspro.vercel.app/service-report?serviceId=SEVTH0NE5K', 'normal', NULL, 'SEVTH0NE5K', 'completed', NULL, NULL, '2026-08-02 13:32:27.769732+00', '2026-08-08 09:27:28.674+00');
INSERT INTO public.tasks VALUES ('e945338d-93f8-4a01-bbdc-83885ba737cb', 'SEA8L1ESCM', 'SE2L0OQUBT', 'সার্ভিসিং কাজ', 'জনাব MD HALIM MIA,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য সার্ভিস করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : MD HADI
কাস্টমার ফোন : 01717020773
কাস্টমার সার্ভিস আই ডি নং : SETSEA3JAO
প্রোডাক্ট মডেল : SEPI 1050 VA DSPx SINE WABVE IPS
কাস্টমার লোকেশন : PIRMOHOLLA MOSHJID GOLLI 148/38 MAHAMUD VILA
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন https://seelectronicspro.vercel.app/service-report?serviceId=SETSEA3JAO', 'normal', NULL, 'SETSEA3JAO', 'completed', NULL, NULL, '2026-08-11 12:11:14.536255+00', '2026-08-12 10:55:25.799+00');
INSERT INTO public.tasks VALUES ('508866a5-ff73-48ff-88ea-55a19bc5447b', 'SENXC6JRYQ', 'SE2L0OQUBT', 'সার্ভিসিং কাজ', 'জনাব MD HALIM MIA,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য সার্ভিস করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : Shabuddin Mahamud
কাস্টমার ফোন : 01310673600
কাস্টমার সার্ভিস আই ডি নং : SEPVF9ZVSB
প্রোডাক্ট মডেল : SEPI1050 VA DSP SINE WAVE IPS 
কাস্টমার লোকেশন : Badambagicha Rd No. 4 Sylhet 
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন https://seelectronicspro.vercel.app/service-report?serviceId=SEPVF9ZVSB', 'normal', NULL, 'SEPVF9ZVSB', 'completed', NULL, NULL, '2026-06-28 23:54:02.26224+00', '2026-08-04 10:52:39.583+00');
INSERT INTO public.tasks VALUES ('fb226214-dd17-4fc9-9b73-e7487d658a01', 'SE704HJM4W', 'SE2L0OQUBT', 'সার্ভিসিং কাজ', 'জনাব MD HALIM MIA,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য সার্ভিস করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : Mr
কাস্টমার ফোন : 01717317401
কাস্টমার সার্ভিস আই ডি নং : SED603PVPW
প্রোডাক্ট মডেল : Not warking
কাস্টমার লোকেশন : Amber Khana Sylhet
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন https://seelectronicspro.vercel.app/service-report?serviceId=SED603PVPW', 'normal', NULL, 'SED603PVPW', 'cancelled', NULL, NULL, '2026-08-04 10:11:37.100443+00', '2026-08-04 19:09:25.683+00');
INSERT INTO public.tasks VALUES ('aa7e689d-c0ca-42cb-963a-9a0d130293f7', 'SELE67P5X8', 'SE2L0OQUBT', 'সার্ভিসিং কাজ', 'জনাব MD HALIM MIA,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য সার্ভিস করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : Samad Ahmed
কাস্টমার ফোন : 01813164570
কাস্টমার সার্ভিস আই ডি নং : SEPKD27390
প্রোডাক্ট মডেল : MSP SE 850 VA IPS NOT CHRGING BACKUP
কাস্টমার লোকেশন : zinda bazer sylhet
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন https://seelectronicspro.vercel.app/service-report?serviceId=SEPKD27390', 'normal', NULL, 'SEPKD27390', 'completed', NULL, NULL, '2026-08-03 13:58:24.967854+00', '2026-08-12 11:03:55.123+00');
INSERT INTO public.tasks VALUES ('a2bd80b4-e836-40c3-96c9-7a6c98d2ec22', 'SEBNESIMMB', 'SEQ2FBJ75J', 'ইন্সটলেশন কাজ', 'জনাব HALIM MIA,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য IPS ইন্সটল করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : FATIMA INTR
কাস্টমার ফোন : 01713822845
কাস্টমার সার্ভিস আই ডি নং : SE2JYULTV0
প্রোডাক্ট মডেল : SEPI 1250 VA DSP SINE WAVE 12 IPS
কাস্টমার লোকেশন : 1no rob menshen vip road jito mia point sylhet
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন https://seelectronicspro.vercel.app/service-report?serviceId=SE2JYULTV0', 'normal', NULL, 'SE2JYULTV0', 'completed', NULL, NULL, '2026-08-13 08:04:49.159124+00', '2026-08-14 09:19:45.683+00');
INSERT INTO public.tasks VALUES ('95fd5e6c-1a82-4349-9969-cf39becc7227', 'SEPPOHH3R0', 'SEQ2FBJ75J', 'ইন্সটলেশন কাজ', 'জনাব HALIM MIA,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য IPS ইন্সটল করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : Nazmul Motin
কাস্টমার ফোন : 01711778531
কাস্টমার সার্ভিস আই ডি নং : SETM13C0HL
প্রোডাক্ট মডেল : Luminus 1050 
কাস্টমার লোকেশন : 49 Saodagar Tola kumar para Sylhet 
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন https://seelectronicspro.vercel.app/service-report?serviceId=SETM13C0HL', 'normal', NULL, 'SETM13C0HL', 'completed', NULL, NULL, '2026-08-21 08:25:28.144684+00', '2026-08-26 07:08:57.158+00');
INSERT INTO public.tasks VALUES ('aedb986e-4607-48e2-871e-53a92a2358ae', 'SET81BY4ZB', 'SEQ2FBJ75J', 'ইন্সটলেশন কাজ', 'জনাব HALIM MIA,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য IPS ইন্সটল করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : MD. RAKIB HUSSEN
কাস্টমার ফোন : 01304761002
কাস্টমার সার্ভিস আই ডি নং : SEBCBQY8QO
প্রোডাক্ট মডেল : SEP 500 VA SQ
কাস্টমার লোকেশন : Shobid bazar  Sylhet 
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন https://seelectronicspro.vercel.app/service-report?serviceId=SEBCBQY8QO', 'normal', NULL, 'SEBCBQY8QO', 'completed', NULL, NULL, '2026-08-15 14:17:10.991428+00', '2026-08-27 07:18:00.36+00');
INSERT INTO public.tasks VALUES ('f9b9e381-0963-4c0e-82b4-29fd9b795826', 'SE1G3SCZ0P', 'SEQ2FBJ75J', 'ইন্সটলেশন কাজ', 'জনাব HALIM MIA,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য IPS ইন্সটল করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : Mss. Eva 
কাস্টমার ফোন : 01775400814
কাস্টমার সার্ভিস আই ডি নং : SE53W3BWD7
প্রোডাক্ট মডেল : SEPI 1050 VA SQ IPS KST
কাস্টমার লোকেশন : 103/a block d Islampur mejortila sylhet 
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন https://seelectronicspro.vercel.app/service-report?serviceId=SE53W3BWD7', 'normal', NULL, 'SE53W3BWD7', 'completed', NULL, NULL, '2026-08-23 10:09:38.280742+00', '2026-08-23 21:46:14.767+00');
INSERT INTO public.tasks VALUES ('1a51d690-9bc5-4ce8-8ea4-3d1b15f374d4', 'SEDBAODBMM', 'SEQ2FBJ75J', 'ইন্সটলেশন কাজ', 'জনাব HALIM MIA,
আপনাকে এস ই ইলেকট্রনিক্স কোম্পানির পন্য IPS ইন্সটল করার জন্য নিয়োগ করা হয়েছে আপনি সম্মানিত কাস্টমার এর সাথে যোগাযোগ করে পন্যটির সমাধান দিন ধন্যবাদ।
কাস্টমার নাম : Mr. Khurshed Alam
কাস্টমার ফোন : 01716442141
কাস্টমার সার্ভিস আই ডি নং : SE8603YSLQ
প্রোডাক্ট মডেল : SEPI 1500 VA 24 V DSP IPS
কাস্টমার লোকেশন : Kasba Chargachh Bazar Brahmin Bariya
সার্ভিসিং সম্পর্কে তথ্য প্রদান করতে লিঙ্কটিতে ক্লিক করুন https://seelectronicspro.vercel.app/service-report?serviceId=SE8603YSLQ', 'normal', NULL, 'SE8603YSLQ', 'completed', NULL, NULL, '2026-08-24 03:54:12.737478+00', '2026-08-25 05:51:26.236+00');


--
-- Data for Name: userAgreements; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Name: __drizzle_migrations_id_seq; Type: SEQUENCE SET; Schema: drizzle; Owner: -
--

SELECT pg_catalog.setval('drizzle.__drizzle_migrations_id_seq', 7, true);


--
-- PostgreSQL database dump complete
--

\unrestrict sj8P3ENVHJp975oX5gzAMS0ckBmfGgL5fwT0VJe07ZySpIrO0cQUwDQfPNBmtjE

