//
delete from [dbo].[accessLogs] where IPVALUE = '::1' or IPValue is null or IPValue = '';
89541

//
ALTER DATABASE webapiangulardemo 
MODIFY FILE (NAME = N'webapiangulardemo_Logs', MAXSIZE = UNLIMITED, FILEGROWTH = 256MB);

//
ALTER DATABASE webapiangulardemo 
MODIFY FILE (NAME = N'webapiangulardemo_Logs', FILEGROWTH = 512MB);

//
USE webapiangulardemo;
SELECT name, physical_name, type_desc 
FROM sys.database_files 
WHERE type_desc = 'LOG';

//webapiangulardemo_Logs

//
ALTER DATABASE webapiangulardemo 
MODIFY FILE (NAME = logical_log_name, FILEGROWTH = 512MB);
*/


//
SELECT 
                       AL.[ID_column]
                      ,AL.[PageName]
                      ,AL.[AccessDate]
                      ,AL.[IpValue]
                 FROM 
                       [dbo].[accessLogs] AL
                    WHERE
                       AL.[LogType] = 1

                    AND
                        (AL.PAGENAME LIKE '%DEMO%'
                    and
                        AL.PAGENAME LIKE '%PAGE%')
                    AND
                        AL.PAGENAME NOT LIKE '%ERROR%'
                    AND 
                        AL.PAGENAME  NOT LIKE '%PAGE_DEMO_INDEX%'
                    AND 
                        UPPER(AL.PAGENAME) NOT LIKE '%CACHE%'
                    AND
                        AL.IPVALUE <> '::1'
                 order by 
                       AL.[ID_column] asc
