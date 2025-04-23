SELECT 
     AL.[ID_column]
    ,AL.[PageName]
    ,AL.[AccessDate]
    ,AL.[IpValue]
    ,AL.[LogType]
FROM 
    [dbo].[accessLogs]  AL
--WHERE
--      [LogType] = {0}
order by 
    AL.[ID_column] desc

----------------------------------------------

SELECT 
     distinct(AL.[PageName])
FROM 
    [dbo].[accessLogs]  AL
WHERE
      [LogType] = 1
and
     AL.[PageName] not like '%BENCHMARK%'
and
     AL.[PageName] not like '%STEPS%'
and
     AL.[PageName] not like '%SORTED%';

----------------------------------------------

SELECT * FROM [dbo].[accessLogs]  AL order by id_column desc;

-------------------------------------------------------------

SELECT 
    DISTINCT(AL.PAGENAME) 
FROM 
    [dbo].[accessLogs]  AL 
WHERE 
    AL.LOGTYPE = 1
AND
    (AL.PAGENAME LIKE '%DEMO%'
and
    AL.PAGENAME LIKE '%PAGE%')
AND
    AL.PAGENAME NOT LIKE '%ERROR%'
AND 
   AL.PAGENAME  NOT LIKE '%PAGE_DEMO_INDEX%'
;

/*

PAGE_CPP_DEMO
PAGE_ANGULAR_DEMO
PAGE_DIJKSTRA_DEMO.
PAGE_ZIP_DEMO
PAGE_REGEX_DEMO
PAGE_ACCESS_LOG_DEMO
PAGE_CSV_ASYNC_DEMO
PAGE_MCSD_EXAM_DEMO
PAGE_PDF_DEMO
PAGE_NEURAL_NETWORK_DEMO
PAGE_SORT_BENCHAMRK_DEMO

*/

/*

PAGE_CPP_DEMO
PAGE_ANGULAR_DEMO
PAGE_DIJKSTRA_DEMO.
PAGE_ZIP_DEMO
PAGE_INDEX
PAGE_REGEX_DEMO
PAGE_CONTACT
PAGE_ACCESS_LOG_DEMO
PAGE_CSV_ASYNC_DEMO
PAGE_ABOUT
PAGE_MCSD_EXAM_DEMO
PAGE_PDF_DEMO
PAGE_NEURAL_NETWORK_DEMO
PAGE_SORT_BENCHAMRK_DEMO


*/

/*

x PAGE_MCSD_EXAM_DEMO / MCSD_EXAM_DEMO
x PAGE_ANGULAR_DEMO / ANGULAR_DEMO
X PAGE_CPP_DEMO / CPP_DEMO
X PAGE_NEURAL_NETWORK_DEMO / NEURAL_NETWORK_DEMO

PAGE_INDEX
PAGE_CONTACT
PAGE_ABOUT
PAGE_EXNACATO_LISTADO

*/


-- UPDATE
UPDATE accessLogs SET PageName='PAGE_DIJKSTRA_DEMO' WHERE PAGENAME='PAGE_DIJKSTRA_DEMO.';
 -- (749 filas afectadas)

--PAGE_MCSD_EXAM_DEMO / MCSD_EXAM_DEMO
UPDATE accessLogs SET PageName='PAGE_MCSD_EXAM_DEMO' WHERE PAGENAME='MCSD_EXAM_DEMO';
--   (17 filas afectadas)

--PAGE_CPP_DEMO / CPP_DEMO
UPDATE accessLogs SET PageName='PAGE_CPP_DEMO' WHERE PAGENAME='CPP_DEMO';
--    (29 filas afectadas)

--PAGE_ANGULAR_DEMO / ANGULAR_DEMO
UPDATE accessLogs SET PageName='PAGE_ANGULAR_DEMO' WHERE PAGENAME='ANGULAR_DEMO';
 -- (281 filas afectadas)

--PAGE_NEURAL_NETWORK_DEMO / NEURAL_NETWORK_DEMO
UPDATE accessLogs SET PageName='PAGE_NEURAL_NETWORK_DEMO' WHERE PAGENAME='NEURAL_NETWORK_DEMO.';
--    (46 filas afectadas)

update accesslogs set pagename='PAGE_CSV_ASYNC_DEMO' where pagename='PAGE_EXNACATO_LISTADO';
--  (17 filas afectadas)

SELECT * FROM accessLogs WHERE pagename='PAGE_EXNACATO_LISTADO';
-- ( 0 FILAS)

update accesslogs set pagename='PAGE_REGEX_DEMO' where pagename LIKE 'PAGE_REGEX_DEMO%';


--------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------

-- PAGE_CPP_DEMO
SELECT COUNT(*) FROM ACCESSLOGS WHERE PAGENAME='PAGE_CPP_DEMO';
-- 25

-- PAGE_ANGULAR_DEMO
SELECT COUNT(*) FROM ACCESSLOGS WHERE PAGENAME='PAGE_ANGULAR_DEMO';
-- 281

-- PAGE_DIJKSTRA_DEMO.
SELECT COUNT(*) FROM ACCESSLOGS WHERE PAGENAME='PAGE_DIJKSTRA_DEMO';
-- 749

-- PAGE_ZIP_DEMO
SELECT COUNT(*) FROM ACCESSLOGS WHERE PAGENAME='PAGE_ZIP_DEMO';
--146

-- PAGE_REGEX_DEMO
SELECT COUNT(*) FROM ACCESSLOGS WHERE PAGENAME='PAGE_REGEX_DEMO';
-- 105

-- PAGE_ACCESS_LOG_DEMO
SELECT COUNT(*) FROM ACCESSLOGS WHERE PAGENAME='PAGE_ACCESS_LOG_DEMO';
-- 939

-- PAGE_CSV_ASYNC_DEMO
SELECT COUNT(*) FROM ACCESSLOGS WHERE PAGENAME='PAGE_CSV_ASYNC_DEMO';
-- 251

-- PAGE_MCSD_EXAM_DEMO
SELECT COUNT(*) FROM ACCESSLOGS WHERE PAGENAME='PAGE_MCSD_EXAM_DEMO';
-- 17

-- PAGE_PDF_DEMO
SELECT COUNT(*) FROM ACCESSLOGS WHERE PAGENAME='PAGE_PDF_DEMO';
-- 238

-- PAGE_NEURAL_NETWORK_DEMO
SELECT COUNT(*) FROM ACCESSLOGS WHERE PAGENAME='PAGE_NEURAL_NETWORK_DEMO';
-- 46

-- PAGE_SORT_BENCHAMRK_DEMO
SELECT COUNT(*) FROM ACCESSLOGS WHERE PAGENAME='PAGE_SORT_BENCHAMRK_DEMO';
-- 213

/*

PAGE_MCSD_EXAM_DEMO	17
PAGE_CPP_DEMO	29
PAGE_NEURAL_NETWORK_DEMO	46
PAGE_REGEX_DEMO	105
PAGE_ZIP_DEMO	146
PAGE_SORT_BENCHAMRK_DEMO	213
PAGE_PDF_DEMO	238
PAGE_CSV_ASYNC_DEMO	251
PAGE_ANGULAR_DEMO	281
PAGE_DIJKSTRA_DEMO	749
PAGE_ACCESS_LOG_DEMO	939
*/
--------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------

SELECT 
      AL.PAGENAME
    , COUNT(*) 
FROM 
    ACCESSLOGS  AL
WHERE 
    AL.LOGTYPE = 1
AND
    (AL.PAGENAME LIKE '%DEMO%'
and
    AL.PAGENAME LIKE '%PAGE%')
AND
    AL.PAGENAME NOT LIKE '%ERROR%'
AND 
   AL.PAGENAME  NOT LIKE '%PAGE_DEMO_INDEX%'
GROUP BY 
    AL.PAGENAME 
ORDER BY 
    2
;

/*

    PAGE_MCSD_EXAM_DEMO	        17
    PAGE_CPP_DEMO	            29
    PAGE_NEURAL_NETWORK_DEMO	46
    PAGE_REGEX_DEMO	            105
    PAGE_ZIP_DEMO	            146
    PAGE_SORT_BENCHAMRK_DEMO	213
    PAGE_PDF_DEMO	            238
    PAGE_CSV_ASYNC_DEMO	        251
    PAGE_ANGULAR_DEMO	        281
    PAGE_DIJKSTRA_DEMO	        749
    PAGE_ACCESS_LOG_DEMO	    939

*/

--------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------

delete from persona where id_column in (20,22);
-- (2 filas afectadas)

---------------------------------------------------------------------------
alter table persona add Ciudad varchar(25);

---------------------------------------------------------------------------
--16	Roberto Alejandro Blanco Pulido	Ingeniero de Alimentos / Especialista en Gerencia de Proyectos en ingeniería / Candidato a Maestrante en Administración de Empresas - MBA
update persona set ciudad='BARRANQUILLA' where id_column = 16;

--1	Pablo Alejandro Pérez Acosta	Técnico Sistemas
update persona set ciudad='USA' where id_column = 1;

--8	Nelson Dueñas	Ingeniero de Sistemas / Restaurador Muebles Antíguos y Modernos
update persona set ciudad='USA' where id_column = 8;

--13	Miguel José Pérez González	Ingeniero Mecánico / Especialidad Ingeniería de la Calidad / Aspirante de Maestría en Ingeniería con Énfasis en Mecánica 
update persona set ciudad='BOGOTA' where id_column = 13;

--6	Martha Lucía Caicedo Barahona	Gastrónoma
update persona set ciudad='BOGOTA' where id_column = 6;

--11	Mario Enrique Rubiano Monroy	Ingeniero Civil - Diseñador Estructural
update persona set ciudad='BOGOTA' where id_column = 11;

--4	María Victoria Gil Daza	Zootecnista / Comerciante
update persona set ciudad='MADRID' where id_column = 4;

--12	Liliana Alexandra Gómez Gelves	Diseño de Modas
update persona set ciudad='BARRANQUILLA' where id_column = 12;

--9	Libardo Orduña Amado	Publicísta
update persona set ciudad='VILLAVICENCIO' where id_column = 9;

--3	Leonardo Salazar García	Odontólogo
update persona set ciudad='BOGOTA' where id_column = 3;

--14	Javier Posada Sandoval	Psicólogo
update persona set ciudad='SOACHA' where id_column = 14;

--5	Javier Mauricio Villalobos	Construcción / Topografía
update persona set ciudad='PANAMA' where id_column = 5

--2	Hernán Gutiérrez Bernal	Independiente / Instructor Canino
update persona set ciudad='BOGOTA' where id_column = 2

--24	Henry Casadiego	Ingeniero de Petróleos
update persona set ciudad='BARRANQUILLA' where id_column = 24

--17	Glenda Amaya	Ingeniera de Sistemaas
update persona set ciudad='COTA' where id_column = 17

--7	Fernando A. Pardo	Abogado
update persona set ciudad='BELGICA' where id_column = 7

--21	Diego Alejandro Gaitán Rico	Ing de Sistemas / Esp Sist de Calidad, Riesgos & Medio Ambiente / Coach Innovación SIT 
update persona set ciudad='BOGOTA' where id_column = 21

--19	Christian Bohorquez	Analísta de Sistemas
update persona set ciudad='USA' where id_column = 19

--18	Carlos Francisco Reina	Médico Veterinario
update persona set ciudad='CALI' where id_column = 18

--10	Ariel Herrera Higuera	Ingeniero Mecánico
update persona set ciudad='BOGOTA' where id_column = 10

--15	Ana María Puerto Rojas	Tecnología en Proyectos Productivos de Planificación y Mercadeo / Analísta Contable
update persona set ciudad='BOGOTA' where id_column = 15

--23	Alex Fernando Miranda Urrego	Independiente / Comerciante 
update persona set ciudad='CALI' where id_column = 23

---------------------------------------------------------------------------

select 
    * 
from
    persona
order by
   CIUDAD desc;

---------------------------------------------------------------------------

SELECT 
      P.CIUDAD  CIUDAD
    , COUNT(*)  COUNT
FROM 
    PERSONA P
GROUP BY
    P.CIUDAD
ORDER BY 2

--------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------
